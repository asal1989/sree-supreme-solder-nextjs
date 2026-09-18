export type Certification = {
  name: string;
  image: string;
  description?: string;
};

// Empty on purpose — do not invent certifications (ISO, RoHS, BIS, etc.).
// Add an entry here only once you have the real certificate/badge image to
// back it, e.g.:
//   { name: "ISO 9001:2015", image: "/assets/img/certs/iso-9001.png" }
// The Certifications section renders nothing while this stays empty.
export const certifications: Certification[] = [];
