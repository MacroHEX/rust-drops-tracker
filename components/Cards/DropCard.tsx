"use client";
// :::
//
import { useState } from "react";

// ::: next
//
import Image from "next/image";

// ::: tremor
//
import { Card, Text, Flex } from "@tremor/react";
import { updateDrop } from "@/lib/Cosmic";

// :::
//
interface Props {
  id: string;
  title: string;
  metadata: {
    streamer: string;
    image: {
      url: string;
    };
    claimed: boolean;
  };
}

// :::
//
const DropCard = ({ id, title, metadata }: Props) => {
  const [claimed, setClaimed] = useState(metadata.claimed);

  const handleClaimedChange = async () => {
    try {
      await updateDrop(id, !claimed);
      setClaimed(!claimed);
    } catch (error) {
      console.error("Error updating claimed:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <Card className="max-w-xs mx-auto">
        <Image
          className="rounded-xl"
          src={metadata.image.url}
          alt={title}
          height={360}
          width={360}
        />
        <Text className="mt-4 text-lg font-bold">{title}</Text>
        <Text className="text-white text-lg">{metadata.streamer}</Text>
        <Flex className="mt-4">
          <Text>Reclamado?</Text>
        </Flex>
        <label className="relative inline-flex items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={claimed}
            onChange={handleClaimedChange}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </Card>
    </div>
  );
};

export default DropCard;
