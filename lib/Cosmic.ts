// :::
//
import { createBucketClient } from "@cosmicjs/sdk";
import { Drop } from "../interfaces/drop";

// ::: Bucket Client
//
const cosmic = createBucketClient({
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? "",
});

export default cosmic;

// ::: API
//
export const getDrops = async (): Promise<Drop[]> => {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: "drops",
        })
        .props("slug, title, metadata")
        .depth(1)
    );
    const aquors: Drop[] = await data.objects;
    return Promise.resolve(aquors);
  } catch (error) {
    console.log("Error on Aquors", error);
  }
  return Promise.resolve({} as Drop[]);
};
