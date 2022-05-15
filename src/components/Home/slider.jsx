import React, { useCallback, useContext, useRef } from 'react'
import { SizeContext } from '../../utils/size-observer'
import useAnimationFrame from '../../utils/use-animation-frame'


function SlideContainer ({children,initialOffsetX,contentWidth, marginTop})  {
    const {innerWidth} = useContext(SizeContext)
    const refScrollX  = useRef(initialOffsetX)
    const refContainer = useRef(null);
    const refContent = useRef(null)
    const enabled = innerWidth < contentWidth
    useAnimationFrame(enabled,useCallback(() =>{
        const {current: elContainer} = refContainer
        const {current: elContent} = refContent
  
        if(elContainer && elContent){
            
            refScrollX.current += 0.5
            elContainer.scrollLeft = refScrollX.current
            if(elContainer.scrollLeft >= elContent.clientWidth){
                refScrollX.current = 0
                elContainer.scrollLeft = 0
            }
        }
    },[]))
    return(
        <div ref={refContainer} className="slider-container" style={{marginTop:marginTop}}>
            <div ref={refContent} className="slider-container-ref-enabled">
                {children}
            </div>
            <div className={enabled ? 'slider-container-ref-enabled' : 'slider-container-ref'}>
                {children}
            </div>
        </div>
    )
}

export function SliderItem ({children,width}){
    return (
        <div className="slider-item" style={{width:width}}>{children}</div>
    )
}   


export default SlideContainer