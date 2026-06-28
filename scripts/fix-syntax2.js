import fs from 'fs';

let content = fs.readFileSync('src/pages/HealthcareDestination.tsx', 'utf-8');
content = content.replace('    </>\n  ;\n  }', '    </>\n  );\n  }');
// Check if the second return has SEO, if not add it.
if (!content.includes('<SEO title="Healthcare Destination | MoveAbroad.pk"')) {
    console.log('Needs SEO in second return');
}
fs.writeFileSync('src/pages/HealthcareDestination.tsx', content, 'utf-8');

let wContent = fs.readFileSync('src/pages/WorkDestination.tsx', 'utf-8');
wContent = wContent.replace('    </>\n  ;\n  }', '    </>\n  );\n  }');
fs.writeFileSync('src/pages/WorkDestination.tsx', wContent, 'utf-8');
