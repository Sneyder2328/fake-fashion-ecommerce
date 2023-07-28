import RootLayout from "./layout";

export default function NotFound() {
  return (
    <RootLayout>
      <div className="w-full flex items-center justify-center grow">
        <h2 className="text-2xl font-bold">
          The page you are looking for is not found
        </h2>
      </div>
    </RootLayout>
  );
}
