export type Discussions = {};

export type Users = {
  id: any;
  createdAt: Date;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phNumber: string;
  isModerator: boolean;
  isAdmin: boolean;
  isUserVerified: boolean;
  isSuspended: boolean;
  codeHash: string;
  lastSeenAt: Date;
  suspendUntil: Date;
  fileId: any;
  settingId: any;
  file: any;
  setting: any;
  tags: any;
  suspendReason: string;
  lang: "en" | "pa" | "da";
};

export type Jwt = {
  id: any;
  username: string;
  email: string;
  accessToken: string;
  tokenType: "Bearer";
};
