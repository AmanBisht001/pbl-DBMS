import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AttendanceEmailRequest {
  teacherName: string;
  teacherEmail: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  organizerName: string;
  presentStudents: Array<{
    name: string;
    rollNumber: string;
    email: string;
  }>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      teacherName,
      teacherEmail,
      eventName,
      eventDate,
      eventTime,
      organizerName,
      presentStudents,
    }: AttendanceEmailRequest = await req.json();

    console.log("Sending attendance email to:", teacherEmail);

    const studentListHTML = presentStudents
      .map(
        (student, index) =>
          `<li style="margin-bottom: 6px;">${index + 1}. <strong>${student.name}</strong> (Roll No: ${student.rollNumber}) — <a href="mailto:${student.email}" style="color: #1a73e8; text-decoration: none;">${student.email}</a></li>`
      )
      .join("");

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #e0e0e0;">
        <h2 style="color: #2c3e50; text-align: center; margin-top: 0;">Attendance Report</h2>
        <p style="font-size: 15px; color: #333;">Dear <strong>${teacherName}</strong>,</p>
        <p style="font-size: 15px; color: #333; line-height: 1.6;">
          Please find below the list of students who attended the event <strong>"${eventName}"</strong>, 
          conducted on <strong>${eventDate}</strong> at <strong>${eventTime}</strong>.
        </p>
        
        <div style="background-color: #f8f9fa; padding: 15px 20px; border-radius: 6px; margin: 25px 0;">
          <h3 style="color: #2c3e50; margin-bottom: 10px;">Present Students (${presentStudents.length})</h3>
          <ol style="padding-left: 20px; margin-top: 0;">
            ${studentListHTML}
          </ol>
        </div>
        
        <p style="font-size: 15px; color: #333;">
          <strong>Organizer:</strong> ${organizerName}<br />
          <strong>Institution:</strong> Graphic Era Hill University(Bhimtal Campus)
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

        <p style="font-size: 12px; color: #777; text-align: center; line-height: 1.5;">
          This is an automated email from the <strong>College Event Management System</strong>.<br/>
          Please do not reply to this message.
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "College Event System <onboarding@resend.dev>",
      to: [teacherEmail],
      subject: `Attendance Report – ${eventName}`,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-attendance-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
