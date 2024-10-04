import avatar1 from "@/public/images/avatar/avatar-1.jpg";
export const user = [
  {
    id: 1,
    name: "abc",
    image: avatar1,
    password: "password",
    email: "abc@ok.com",
    resetToken: null,
    resetTokenExpiry: null,
    profile: null,
  },
];

export type User = (typeof user)[number];
