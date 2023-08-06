import Link from "next/link";

function FooterMenuTitle({ text }: { text: string }) {
  return (
    <span className="text-sm font-bold uppercase text-gray-800">{text}</span>
  );
}

function FooterMenuSubItem({ text, url }: { text: string; url: string }) {
  return (
    <Link href={url}>
      <span className="text-sm text-gray-800 hover:underline">{text}</span>
    </Link>
  );
}

export function FooterMenuItem({
  title,
  subitems,
}: {
  title: string;
  subitems: { text: string; url: string }[];
}) {
  return (
    <li>
      <FooterMenuTitle text={title} />
      <ul className="mt-2 flex flex-col space-y-2">
        {subitems.map(({ text, url }) => (
          <FooterMenuSubItem key={text} text={text} url={url} />
        ))}
      </ul>
    </li>
  );
}
