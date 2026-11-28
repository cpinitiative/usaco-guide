import Logo from '../components/Logo';
import LogoSquare from '../components/LogoSquare';

const meta = {
  title: 'Logo',
};

export default meta;

export const Default = (): JSX.Element => (
  <div className="h-9">
    <Logo />
  </div>
);

export const Square = (): JSX.Element => <LogoSquare className="h-10 w-10" />;
