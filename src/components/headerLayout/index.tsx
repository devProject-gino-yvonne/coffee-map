import LogoComponent from './logoComponent';
import PersonIcon from '@mui/icons-material/Person';

export default function HeaderLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#f6efe7] text-black h-16">
        <div className="h-full mx-7 flex items-center  justify-between">
          <LogoComponent />
          <div className="flex items-center gap-4">
            <div className="cursor-pointer">登入</div>
            <PersonIcon className="text-2xl text-blue-50" />
          </div>
        </div>
      </header>
    </div>
  );
}
