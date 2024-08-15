export interface UnsplashImg {
  description: string;
  user: {
    id: string;
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}

export interface PageProps {
  params: { tag: string };
}

export interface UnsplashUser {
  username: string;
  first_name: string;
  last_name: string;
  errors:[]
}
