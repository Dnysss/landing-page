//import features data
import { featureData } from '../data';

//import icons
import { ImArrowRight2 } from "react-icons/im";

const Features = () => {
    const { title, subtitle, list} = featureData
    return (
        <section className='my-[70px] xl:my-[150px]'>
            <div className='container mx-auto'>
                <div className='text-center '>
                    <h2 className='h2 mb-6 xl:mb-12' data-aos='fade-down' data-aos-delay='100'>{title}</h2>
                    <p className='lead max-w-[584px] mx-auto mb-16 xl:mb-24' data-aos='fade-down' data-aos-delay='200'>{subtitle}</p>
                </div>
                {/* Listas de funcionalidades */}
                <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
                    {list.map((feature, index) => {
                        const { image, bgImage, title, description, linkText, delay } = feature;
                        return (
                            <div className='w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' key={index} data-aos='zoom-in' data-aos-offset='100' data-aos-delay={delay}>
                                <div className='hidden xl:flex absolute top-0 right-0 -z-10'>
                                    <img src={bgImage} alt="" />
                                </div>
                                    
                                <div className='w-80 max-w-[120px] xl:mr-7 xl:max-w-[232px]' data-aos='zoom-in-right' data-aos-delay={delay}>
                                    <img src={image} alt="" />
                                </div>

                                <div className='max-w-[220px]'>
                                    <h3 className='h3 mb-4'>{title}</h3>
                                    <p className='font-light italic mb-4'>{description}</p>
                                    <div className='flex items-center gap-x-2 group mt-2'>
                                        <a className='text-primary font-bold' href="#">{linkText}</a>
                                        <ImArrowRight2 className='text-xl text-accent-primary group-hover:ml-[5px] transition-all' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features;