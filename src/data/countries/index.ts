import { CountryData } from './types';
import { germany } from './germany';
import { canada } from './canada';
import { australia } from './australia';
import { uk } from './uk';
import { ireland } from './ireland';
import { usa } from './usa';
import { uae } from './uae';
import { saudiArabia } from './saudiArabia';

export * from './types';

const countryImages: Record<string, string> = {
  germany: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80',
  canada: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1400&q=80',
  australia: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80',
  uk: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80',
  ireland: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1400&q=80',
  usa: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1400&q=80',
  uae: 'https://images.unsplash.com/photo-1518684079815-4ba18b0a97da?w=1400&q=80',
  'saudi-arabia': 'https://images.unsplash.com/photo-1586724237569-f3d0c1ede8b6?w=1400&q=80',
};

const countries: Record<string, CountryData> = {
  germany: { ...germany, heroImage: countryImages.germany },
  canada: { ...canada, heroImage: countryImages.canada },
  australia: { ...australia, heroImage: countryImages.australia },
  uk: { ...uk, heroImage: countryImages.uk },
  ireland: { ...ireland, heroImage: countryImages.ireland },
  usa: { ...usa, heroImage: countryImages.usa },
  uae: { ...uae, heroImage: countryImages.uae },
  'saudi-arabia': { ...saudiArabia, heroImage: countryImages['saudi-arabia'] }
};

export const getCountryData = (countryId: string): CountryData | undefined => {
  return countries[countryId.toLowerCase()];
};

export const getAllCountries = (): CountryData[] => {
  return Object.values(countries);
};
