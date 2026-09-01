import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
    try {
        const secret = process.env.SANITY_REVALIDATE_SECRET || 'my-super-secret-token';
        const signature = req.headers.get('sanity-webhook-signature');

        if (signature) {
            // Validate signature using next-sanity's built in parser
            const { isValidSignature, body } = await parseBody(req, secret);
            if (!isValidSignature) {
                return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
            }
        } else {
            // Fallback for simple URL parameter if they didn't use the Secret field in Sanity UI
            const secretQuery = req.nextUrl.searchParams.get('secret');
            if (secretQuery !== secret) {
                return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
            }
        }

        revalidateTag('post', 'max');

        return NextResponse.json({ 
            revalidated: true, 
            now: Date.now(),
            message: 'Successfully revalidated post cache.'
        });
    } catch (err: any) {
        return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
    }
}
