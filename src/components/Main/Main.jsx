import { lazy } from 'react';
const Gallery = lazy(() => import('../../../src/components/Gallery/Gallery'));


export const Main = () => {

    return  <main>
                <Gallery/>
            </main>
}