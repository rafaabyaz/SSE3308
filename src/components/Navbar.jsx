export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          SSE3308 Fullstack
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control hidden md:block">
          <input type="text" placeholder="Search..." className="input input-bordered input-sm w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-neutral text-neutral-content flex items-center justify-center font-bold">
              RA
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}