import { connect } from "../../../dbConfig/dbConfig";
import Client from "../../../models/clientModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from '../../../helpers/mailer';



connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, message } = reqBody;

        const newclientFeedback = new Client({
            name,
            email,
            message
        })

        await newclientFeedback.save()

        // Send email feedback email
        await sendEmail({client: Client})

        return NextResponse.json({
            message: 'User feedback recived successfully',
            success: true,
            newclientFeedback
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}