import { DOCTOR } from "./constants";

export const SITE_URL = "https://www.drsushilpatle.com";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: DOCTOR.name,
      honorificSuffix: "M.B.B.S., D.Ortho, M.Ch. Ortho (USAIM)",
      jobTitle: DOCTOR.title,
      description: DOCTOR.bio,
      medicalSpecialty: ["Orthopedic", "Rheumatology"],
      telephone: DOCTOR.phoneRaw,
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "MP Medical Council Registration",
          value: "4172",
        },
        {
          "@type": "PropertyValue",
          propertyID: "Healthcare Professional ID",
          value: DOCTOR.hprId,
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Main Road, Adhartal",
        addressLocality: "Jabalpur",
        addressRegion: "Madhya Pradesh",
        postalCode: "482004",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "MedicalClinic",
        name: DOCTOR.clinicName,
      },
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${SITE_URL}/#clinic`,
      name: DOCTOR.clinicName,
      image: `${SITE_URL}/og-image.jpg`,
      url: SITE_URL,
      telephone: [DOCTOR.phoneRaw, DOCTOR.landlineRaw],
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Main Road, Adhartal",
        addressLocality: "Jabalpur",
        addressRegion: "Madhya Pradesh",
        postalCode: "482004",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: DOCTOR.coordinates.lat,
        longitude: DOCTOR.coordinates.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "12:00",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "19:00",
          closes: "21:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: DOCTOR.rating,
        reviewCount: DOCTOR.reviewCount,
      },
      medicalSpecialty: "Orthopedic",
      amenityFeature: DOCTOR.facilities.map((f) => ({
        "@type": "LocationFeatureSpecification",
        name: f,
        value: true,
      })),
      physician: { "@id": `${SITE_URL}/#physician` },
    },
  ],
};
