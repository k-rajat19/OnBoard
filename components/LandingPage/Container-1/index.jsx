/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Container1() {
  return (
    <div className="lp-container-1  ">
      <div className="container-lg">

        <div className="lp-inner-container  ">
          <div className="lp-inner-container-text"  >
            <div className="lp-inner-container-heading">
              Start investing on innovative software products
            </div>
            <div className="lp-inner-container-subheading">
              Inspiration comes in many ways and you like to save everything from.
            </div>
            <div className="lp-inner-container-btn">

              <Link href={'/formv2/?section=1'}><button>Create My Platform</button></Link>
            </div>
          </div>
          <div className="lp-inner-container-img " data-aos="fade-right" data-aos-once="false" data-aos-duration="1000"     >

            {/* unable to use svg's */}

            {/* but we can try to this : */}
            {/* disabled `throwIfNamespace` to false  in `.babelrc`*/}

            <Image src="/Rectangle (18).png" height={500} width={500} alt="Rectangle" />


          </div>
        </div>
      </div>
    </div>
  )

}