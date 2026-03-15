import Image from 'next/image';
const NonTrivial = () => {
  return (
    <>
      <div className="hidden dark:block">
        <Image
          src="/assets/nontrivialdark.png"
          alt="Non-Trivial logo"
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
          src="/assets/nontrivial.png"
          alt="Non-Trivial logo"
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
export default NonTrivial;
