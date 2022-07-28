import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'
import classNames from 'classnames'

const Image = forwardRef(({src, alt, className, fallback: customFallback = images.noImage, ...props}, ref) => {
    console.log(images.noImage)
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customFallback)
    }
    return ( 
        // eslint-disable-next-line jsx-a11y/alt-text
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt}  {...props} onError={handleError}/>
     );
})

export default Image;