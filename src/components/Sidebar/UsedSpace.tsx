export function UsedSpace() {
  return (
    <div className="text-sm bg-violet-50 py-5 px-4 rounded-lg my-6">
      <p className="font-medium text-primary-700 mb-1">Used space</p>
      <span className="font-normal text-violet-500">
        Your team has used 80% of your abailable space. Need moed?
      </span>
      <div className="h-2 w-full bg-violet-100 my-4 rounded-full">
        <div className="h-2 w-[80%] bg-violet-600 my-4 rounded-full" />
      </div>
      <div className="flex gap-3 font-semibold">
        <button className="text-violet-500 cursor-pointer hover:brightness-125">
          Dismiss
        </button>
        <button className="text-violet-700 cursor-pointer hover:brightness-125">
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
