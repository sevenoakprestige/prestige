import { NextResponse } from 'next/server';
import { sendLeadEmails } from '@/lib/mailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Basic validation
        if (!body.fullName || !body.email || !body.source) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const result = await sendLeadEmails({
            fullName: body.fullName,
            email: body.email,
            phone: body.phone,
            companyName: body.companyName,
            message: body.message,
            source: body.source,
        });

        if (!result.success) {
            return NextResponse.json(
                { success: false, error: result.error },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
