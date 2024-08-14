export default function HeroAlert({ data }: any) {
  const boldText = data.replace(/\(([^)]+)\)/g, "<strong>$1</strong>");

  return (
    <div className="border bg-blue-100 my-4 py-4 px-5 rounded-md">
      <div dangerouslySetInnerHTML={{ __html: boldText }} />
    </div>
  );
}
