export function TabUserDetails() {
  return (
    <form className="h-full w-full" id="personalInfo">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
          <p className="text-sm font-normal text-zinc-500">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="flex h-10 flex-row gap-3 text-sm font-semibold">
          <button
            type="button"
            form="personalInfo"
            className="w-20 cursor-pointer rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-700 hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="personalInfo"
            className="w-16 cursor-pointer rounded-lg border bg-violet-600 px-4 py-2.5 text-white hover:brightness-110"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
