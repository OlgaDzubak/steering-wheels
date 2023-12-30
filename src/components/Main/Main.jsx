import { lazy } from 'react';
const Gallery = lazy(() => import('../Gallery/Gallery'));


export const Main = () => {

    return  <main>
                <Gallery/>
            </main>
}