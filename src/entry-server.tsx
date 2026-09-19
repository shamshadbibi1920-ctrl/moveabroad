import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'stream';
import { AppRoutes } from './App';

export async function render(url: string): Promise<{ html: string; helmet?: any }> {
  const helmetContext: any = {};

  return new Promise((resolve, reject) => {
    let appHtml = '';
    const writable = new Writable({
      write(chunk, encoding, callback) {
        appHtml += chunk.toString();
        callback();
      },
    });

    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        onAllReady() {
          pipe(writable);
        },
        onError(err) {
          reject(err);
        },
      }
    );

    writable.on('finish', () => {
      resolve({
        html: appHtml,
        helmet: helmetContext.helmet,
      });
    });

    writable.on('error', (err) => {
      reject(err);
    });
  });
}
