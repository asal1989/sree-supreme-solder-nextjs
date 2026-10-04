import Image from "next/image";

export default function IndustryCard({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="group relative flex h-full min-h-72 flex-col justify-end overflow-hidden bg-dark-2 text-white">
      <Image
        src={img}
        alt={`${title} industry`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/10 transition-colors duration-500 group-hover:from-dark group-hover:via-dark/80" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-amber transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
      <div className="relative p-6 transition-transform duration-500 ease-out lg:translate-y-10 lg:group-hover:translate-y-0">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-cream transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">{desc}</p>
        <span aria-hidden className="mt-3 inline-block text-amber transition-all duration-500 lg:opacity-0 lg:group-hover:translate-x-1 lg:group-hover:opacity-100">&rarr;</span>
      </div>
    </article>
  );
}
