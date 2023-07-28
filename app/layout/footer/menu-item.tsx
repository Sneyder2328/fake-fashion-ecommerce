import Link from "next/link";

function Title({ text }: { text: string }) {
  return (
    <span className="uppercase font-bold text-gray-800 text-sm">{text}</span>
  );
}

function SubItem({ text, url }: { text: string; url: string }) {
  return (
    <Link href={url}>
      <span className="text-gray-800 text-sm hover:underline">{text}</span>
    </Link>
  );
}

export function MenuItem({
  title,
  subitems,
}: {
  title: string;
  subitems: { text: string; url: string }[];
}) {
  return (
    <li>
      <Title text={title} />
      <ul className="flex flex-col space-y-2 mt-2">
        {subitems.map(({ text, url }) => (
          <SubItem key={text} text={text} url={url} />
        ))}
      </ul>
    </li>
  );
}
