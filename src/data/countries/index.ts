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

const HOME_COUNTRIES = [
  { id: 'germany', name: 'Germany', flag: '🇩🇪' },
  { id: 'austria', name: 'Austria', flag: '🇦🇹' },
  { id: 'belgium', name: 'Belgium', flag: '🇧🇪' },
  { id: 'croatia', name: 'Croatia', flag: '🇭🇷' },
  { id: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿' },
  { id: 'denmark', name: 'Denmark', flag: '🇩🇰' },
  { id: 'estonia', name: 'Estonia', flag: '🇪🇪' },
  { id: 'finland', name: 'Finland', flag: '🇫🇮' },
  { id: 'france', name: 'France', flag: '🇫🇷' },
  { id: 'greece', name: 'Greece', flag: '🇬🇷' },
  { id: 'hungary', name: 'Hungary', flag: '🇭🇺' },
  { id: 'iceland', name: 'Iceland', flag: '🇮🇸' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹' },
  { id: 'latvia', name: 'Latvia', flag: '🇱🇻' },
  { id: 'lithuania', name: 'Lithuania', flag: '🇱🇹' },
  { id: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺' },
  { id: 'malta', name: 'Malta', flag: '🇲🇹' },
  { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱' },
  { id: 'norway', name: 'Norway', flag: '🇳🇴' },
  { id: 'poland', name: 'Poland', flag: '🇵🇱' },
  { id: 'portugal', name: 'Portugal', flag: '🇵🇹' },
  { id: 'slovakia', name: 'Slovakia', flag: '🇸🇰' },
  { id: 'slovenia', name: 'Slovenia', flag: '🇸🇮' },
  { id: 'spain', name: 'Spain', flag: '🇪🇸' },
  { id: 'sweden', name: 'Sweden', flag: '🇸🇪' },
  { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭' },
  { id: 'canada', name: 'Canada', flag: '🇨🇦' },
  { id: 'usa', name: 'USA', flag: '🇺🇸' },
  { id: 'uk', name: 'UK', flag: '🇬🇧' },
  { id: 'ireland', name: 'Ireland', flag: '🇮🇪' },
  { id: 'australia', name: 'Australia', flag: '🇦🇺' },
  { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿' },
  { id: 'uae', name: 'UAE', flag: '🇦🇪' },
  { id: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦' },
  { id: 'qatar', name: 'Qatar', flag: '🇶🇦' },
  { id: 'kuwait', name: 'Kuwait', flag: '🇰🇼' },
  { id: 'bahrain', name: 'Bahrain', flag: '🇧🇭' },
  { id: 'oman', name: 'Oman', flag: '🇴🇲' },
  { id: 'japan', name: 'Japan', flag: '🇯🇵' },
  { id: 'south-korea', name: 'South Korea', flag: '🇰🇷' },
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬' },
  { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾' },
  { id: 'china', name: 'China', flag: '🇨🇳' }
];

export const getCountryData = (countryId: string): CountryData | undefined => {
  return countries[countryId.toLowerCase()];
};

export const getAllCountries = (): CountryData[] => {
  return HOME_COUNTRIES.map(hc => {
    return (countries[hc.id.toLowerCase()] || hc) as CountryData;
  });
};
