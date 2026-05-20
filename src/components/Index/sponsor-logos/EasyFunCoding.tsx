import Image from 'next/image';
const EasyFunCoding = () => {
  return (
    <>
      <div className="hidden dark:block">
        <Image
          src="/assets/easyfuncoding.png"
          alt="EasyFunCoding logo"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/>`
          ).toString('base64')}`}
          height={1500}
          width={500}
        />
      </div>
      <div className="dark:hidden">
        <Image
          src="/assets/easyfuncoding.jpg"
          alt="EasyFunCoding logo"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/>`
          ).toString('base64')}`}
          height={1500}
          width={500}
        />
      </div>
    </>
  );
};
export default EasyFunCoding;
