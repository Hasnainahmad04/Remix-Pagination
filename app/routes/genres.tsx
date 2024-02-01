import React from "react";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { getGenresList } from "~/action/genres.action";
import { GenreResponse } from "~/types";
import { useLoaderData } from "@remix-run/react";
import GenreCard from "~/components/GenreCard";

interface LoaderRes {
  genres: Awaited<GenreResponse>;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Genres | Video Game Discovery Site" },
    {
      name: "description",
      content: "List of Game Categories",
    },
  ];
};

const Page = () => {
  const { genres } = useLoaderData() as LoaderRes;
  return (
    <>
      <h1
        className={"text-[2rem] lg:text-[4rem] text-white font-semibold mt-6"}
      >
        Genres
      </h1>
      <section className={"grid md:grid-cols-2 lg:grid-cols-3 gap-6"}>
        {genres?.results?.map((genre) => (
          <GenreCard genre={genre} key={genre.id} />
        ))}
      </section>
    </>
  );
};

export const loader: LoaderFunction = async () => {
  return json<LoaderRes>({ genres: await getGenresList(20) });
};
export default Page;
