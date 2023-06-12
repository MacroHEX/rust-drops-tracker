export interface Drop {
  id: string;
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
