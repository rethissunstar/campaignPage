// src/components/Solar2e/Solar.jsx
import React, { useState } from "react";
import "./solar.css";
const data = {
  _id: "ObjectID(~)",
  owner: "asaph.rob@gmail.com",
  descriptors: {
    name: "Bob",
    concept: "Ox-cart Driver",
    caste: "eclipse",
  },
  attributes: {
    physical: {
      strength: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
      dexterity: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
      stamina: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
    },
    social: {
      charisma: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
      manipulation: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
      appearance: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
    },
    mental: {
      perception: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
      intelligence: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
      wits: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
    },
  },
  abilities: {
    dawn: {
      melee: {
        value: 1,
        _meta: {
          min: 1,
          max: 10,
        },
      },
      specialties: {
        "sharp sticks": {
          value: 1,
          _meta: {
            min: 0,
            max: 3,
          },
        },
      },
    },
    zenith: {},
    twilight: {},
    night: {},
    eclipse: {},
    other: {},
  },
  advantages: {
    backgrounds: {},
    charms: {},
    combos: {},
    sorcery: {},
  },
  essence: {
    rating: {
      value: 1,
      _meta: {
        min: 1,
        max: 10,
      },
    },
    personal: 10,
    peripheral: 10,
    "anima effects": ["glowy"],
    "anima banner": {
      levels: {
        1: "Weak",
        4: "Strong",
        8: "Mild",
      },
      description: "A glowy circle.",
    },
  },
  virtues: {
    compassion: {
      value: 1,
      _meta: {
        min: 1,
        max: 10,
      },
    },
  },
};

const Solar = () => {
  return <div className="solar-character-sheet"></div>;
};

export default Solar;
