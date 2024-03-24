import { facebook, instagram, twitter } from "../assets/logo/index";

import {
  cardPhoto1,
  cardPhoto2,
  cardPhoto3,
  cardPhoto4,
} from "../assets/images";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Blogs", path: "/blogs" },
  { label: "Adoption", path: "/adoption" },
  { label: "Rescue", path: "/rescue" },
];

export const aboutCard = [
  {
    title: "Rescue and Care",
    descript:
      "We provide them with a safe haven, veterinary care, and plenty of love until they find their forever homes.",
  },
  {
    title: "Adoption Matching",
    descript:
      "Whether you're looking for a playful puppy, a cuddly cat, or a calm senior dog, we have the perfect match waiting for you.",
  },
  {
    title: "Adoption Resources",
    descript:
      "We provide all the information you need to become a responsible pet owner, from training tips to healthcare resources.",
  },
];

export const accordionData = [
  {
    heading: "Saving Lives",
    content:
      "Each year, over 1 million adoptable dogs or cats face euthanasia due to overcrowded shelters. By adopting, you directly contribute to saving a life and providing a loving home for a furry friend.",
  },
  {
    heading: "Unconditional Love",
    content:
      "Both cats and dogs offer unwavering companionship. Their affectionate gestures, whether it’s a cat’s gentle purr or a dog’s wagging tail, remind us of the joy of unconditional love.",
  },
  {
    heading: "Health Benefits",
    content:
      " Owning a pet can reduce stress, anxiety, and depression. The presence of a cat or dog provides companionship, especially vital for older individuals, those grieving, and those living alone.",
  },
  {
    heading: "Personality Diversity",
    content:
      "Cats and dogs have distinct personalities. Cats tend to be independent and mysterious, while dogs are loyal and exuberant. Choose based on your own temperament and lifestyle.",
  },
  {
    heading: "Low Maintenance",
    content:
      "Cats are generally more self-sufficient, requiring less attention and care than dogs. If you have a busy schedule, a cat might be the perfect fit.",
  },
  {
    heading: "Graceful Behaviors",
    content:
      "Cats’ graceful movements and their ability to land on their feet even from great heights are fascinating. Dogs, on the other hand, exhibit boundless joy and enthusiasm.",
  },
  {
    heading: "Training Opportunities",
    content:
      "Adopting a pet allows you to shape their behavior and train them according to your preferences. Whether it’s teaching tricks to a dog or encouraging a cat to use a scratching post, the journey is rewarding.",
  },
];

export const cardPhoto = [
  { imageURL: cardPhoto1 },
  { imageURL: cardPhoto2 },
  { imageURL: cardPhoto3 },
  { imageURL: cardPhoto4 },
];

export const footerLinks = [
  {
    title: "Help",
    links: [
      { label: "About Us", link: "/" },
      { label: "Mission", link: "/" },
      { label: "Vision", link: "/" },
      { label: "Why Adopt?", link: "/" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Adopt Cat", link: "/" },
      { label: "Adopt Dog", link: "/" },
      { label: "Blogs", link: "/" },
      { label: "Need to Know", link: "/" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: "Email", link: "/" },
      { label: "Contact No#", link: "/" },
      { label: "Hotline", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook" },
  { src: instagram, alt: "instagram" },
  { src: twitter, alt: "twitter" },
];
