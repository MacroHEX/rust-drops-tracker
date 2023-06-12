// :::
//
import { createBucketClient } from "@cosmicjs/sdk";
import { Drop } from "../interfaces/drop";

// ::: Bucket Client
//
const cosmic = createBucketClient({
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? "",
  writeKey: process.env.NEXT_PUBLIC_COSMIC_WRITE_KEY ?? "",
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
        .props("id, slug, title, metadata")
        .depth(1)
    );
    const drops: Drop[] = await data.objects;
    return Promise.resolve(drops);
  } catch (error) {
    console.log("Error", error);
  }
  return Promise.resolve({} as Drop[]);
};

export const updateDrop = async (id: string, claimed: boolean) => {
  try {
    await Promise.resolve(
      cosmic.objects.updateOne(id, {
        metadata: {
          claimed,
        },
      })
    );
  } catch (error) {
    console.log("Error", error);
  }
};
