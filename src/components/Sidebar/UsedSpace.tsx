export function UsedSpace() {
  return (
    <div className="my-6 rounded-lg bg-violet-50 px-4 py-5 text-sm">
      <p className="text-primary-700 mb-1 font-medium">Used space</p>
      <span className="font-normal text-violet-500">
        Your team has used 80% of your abailable space. Need moed?
      </span>
      <div className="my-4 h-2 w-full rounded-full bg-violet-100">
        <div className="my-4 h-2 w-[80%] rounded-full bg-violet-600" />
      </div>
      <div className="flex gap-3 font-semibold">
        <button className="cursor-pointer text-violet-500 hover:brightness-125">
          Dismiss
        </button>
        <button className="cursor-pointer text-violet-700 hover:brightness-125">
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
