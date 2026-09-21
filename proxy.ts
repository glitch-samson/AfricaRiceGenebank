import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const aliases: Record<string, string> = {
    '/genebank': '/about',
    '/species-african': '/collection/african-rice',
    '/species-asian': '/collection/asian-rice',
    '/interspecifics': '/collection/interspecifics',
    '/wild': '/collection/wild-relatives',
    '/conservation': '/what-we-do/conservation',
    '/acquisition': '/what-we-do/acquisition',
    '/regeneration': '/what-we-do/regeneration',
    '/characterization': '/what-we-do/characterization',
    '/distribution': '/what-we-do/distribution',
    '/genomics-for-genebank': '/research/genomics',
    '/quality-control-analysis': '/research/quality-control',
    '/sub-setting': '/research/sub-setting',
    '/genomics-data': '/data/genomics',
    '/characterization-data': '/data/characterization',
    '/request-for-germplasm': '/request-germplasm',
};

export function proxy(request: NextRequest) {
    const destination = aliases[request.nextUrl.pathname];
    if (!destination) return NextResponse.next();
    return NextResponse.redirect(new URL(destination, request.url));
}

export const config = {
    matcher: [
        '/genebank', '/species-african', '/species-asian', '/interspecifics', '/wild',
        '/conservation', '/acquisition', '/regeneration', '/characterization', '/distribution',
        '/genomics-for-genebank', '/quality-control-analysis', '/sub-setting', '/genomics-data',
        '/characterization-data', '/request-for-germplasm',
    ],
};