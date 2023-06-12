export interface Drop {
  slug: string;
  title: string;
  metadata: {
    streamer: string;
    image: {
      url: string;
      imgix_url: string;
    };
    claimed: boolean;
  };
}
