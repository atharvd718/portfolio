import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    # Target letter size with compact 0.38 in (27 pt) margins to fit beautifully
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=28,
        rightMargin=28,
        topMargin=26,
        bottomMargin=26
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#1A1A1A')
    )

    sub_title_style = ParagraphStyle(
        'SubTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#333333')
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#4A5568')
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#AC5029'),
        spaceBefore=5,
        spaceAfter=2
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=colors.HexColor('#1A1A1A')
    )

    item_subtitle_style = ParagraphStyle(
        'ItemSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#374151')
    )

    right_meta_style = ParagraphStyle(
        'RightMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#4B5563')
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=10.8,
        textColor=colors.HexColor('#2D3748')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.6,
        leftIndent=11,
        firstLineIndent=-7,
        textColor=colors.HexColor('#2D3748')
    )

    story = []

    # 1. Header
    story.append(Paragraph("ATHARV DESHMUKH", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Full Stack & Applied AI Developer &nbsp;|&nbsp; B.Tech CSE Undergraduate", sub_title_style))
    story.append(Spacer(1, 2))
    contact_line = (
        "Pune, India &nbsp;•&nbsp; +91 7499824226 &nbsp;•&nbsp; "
        '<a href="mailto:atharv.d.718@gmail.com" color="#AC5029">atharv.d.718@gmail.com</a> &nbsp;•&nbsp; '
        '<a href="https://github.com/atharvd718" color="#AC5029">GitHub</a> &nbsp;•&nbsp; '
        '<a href="https://www.linkedin.com/in/atharvdeshmukhcs" color="#AC5029">LinkedIn</a> &nbsp;•&nbsp; '
        '<a href="https://leetcode.com" color="#AC5029">LeetCode</a> &nbsp;•&nbsp; '
        '<a href="https://www.codechef.com" color="#AC5029">CodeChef (1717)</a>'
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#AC5029'), spaceBefore=1, spaceAfter=4))

    # 2. Summary
    story.append(Paragraph("SUMMARY", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceBefore=1, spaceAfter=3))
    summary_text = (
        "Computer Science undergraduate who builds full-stack web applications with React.js, Next.js, FastAPI, and TypeScript, "
        "and integrates LLM and RAG features end-to-end: frontend, backend, auth, database, and third-party services (payments, email). "
        "Led a 4-member hackathon team to 5th place. Seeking a Full Stack / AI internship."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. Education
    story.append(Paragraph("EDUCATION", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceBefore=1, spaceAfter=3))
    
    edu_table_data = [
        [
            Paragraph("<b>Pune Vidhyarthi Griha's College of Engineering and Technology (PVGCOET)</b>", item_title_style),
            Paragraph("Aug 2025 – Aug 2029", right_meta_style)
        ],
        [
            Paragraph("<i>B.Tech in Computer Science Engineering, Pune</i> &nbsp;|&nbsp; JEE Main: <b>93.69 %ile</b> &nbsp;|&nbsp; SSC: <b>96%</b>", item_subtitle_style),
            Paragraph("Pune, India", right_meta_style)
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[420, 136])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))

    # 4. Experience
    story.append(Paragraph("EXPERIENCE", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceBefore=1, spaceAfter=3))

    exp_items = [
        {
            "role": "Full Stack Development Intern",
            "org": "CodeAlpha",
            "loc": "Remote",
            "dates": "Jun 2026 – Present",
            "bullets": [
                "Build full-stack web applications using React.js, Next.js, TypeScript, Node.js, Express.js, FastAPI, and Tailwind CSS.",
                "Design, develop, and integrate RESTful APIs with responsive frontend interfaces following clean architecture principles.",
                "Collaborate through Git and GitHub; manage version control, structured debugging, and testing within Agile workflows."
            ]
        },
        {
            "role": "Open Source Contributor",
            "org": "GirlScript Summer of Code 2026",
            "loc": "Remote",
            "dates": "May 2026 – Present",
            "bullets": [
                "Contribute to open-source web development and AI projects through GitHub pull requests, code reviews, and issue resolution.",
                "Work with distributed teams using thorough documentation, modular design, and version-control best practices."
            ]
        },
        {
            "role": "College Ambassador",
            "org": "Techfest IIT Bombay",
            "loc": "Remote",
            "dates": "Jul 2026 – Present",
            "bullets": [
                "Represent PVGCOET and coordinate technical event outreach, student engagement, and promotional activities across campus."
            ]
        }
    ]

    for exp in exp_items:
        table_data = [
            [
                Paragraph(f"<b>{exp['role']}</b> &nbsp;—&nbsp; {exp['org']}", item_title_style),
                Paragraph(exp['dates'], right_meta_style)
            ]
        ]
        t = Table(table_data, colWidths=[420, 136])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t)
        for bullet in exp['bullets']:
            story.append(Paragraph(f"• &nbsp;{bullet}", bullet_style))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 2))

    # 5. Projects
    story.append(Paragraph("PROJECTS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceBefore=1, spaceAfter=3))

    projects = [
        {
            "name": "MediSense AI",
            "stack": "Next.js, FastAPI, TypeScript, SQLite, Gemini Flash, ReportLab",
            "meta": "Ignition HackVerse (5th Place)",
            "bullets": [
                "Led a 4-member hackathon team to build and deploy an AI-powered medical report analyzer across Vercel and Render.",
                "Integrated Google Gemini for clinical analysis, automated PDF processing, and custom PDF report generation over RESTful APIs."
            ]
        },
        {
            "name": "Guardian (Safety PWA)",
            "stack": "Vite, React, TypeScript, Clerk, Firebase Firestore, Gemini, Stripe",
            "meta": "Live PWA",
            "bullets": [
                "Built an installable PWA featuring a Gemini safety assistant, SOS trigger with live location sharing, and automated alerts.",
                "Engineered real-time sync with Firestore for emergency data tracking and integrated Stripe for subscription tier billing."
            ]
        },
        {
            "name": "DocuMind AI (RAG Document Chat)",
            "stack": "FastAPI, React/Vite, Groq (Llama 3.3), SQLite, NumPy",
            "meta": "Self-Hosted RAG",
            "bullets": [
                "Built a self-hosted RAG platform querying documents via high-speed Llama 3.3 inference on Groq.",
                "Implemented vector similarity search directly using NumPy matrix dot products, avoiding managed DB overhead."
            ]
        },
        {
            "name": "MockMate (AI Mock Interview Platform)",
            "stack": "Next.js, Clerk, Neon PostgreSQL, Drizzle ORM, Gemini, Stripe",
            "meta": "Full Stack AI SaaS",
            "bullets": [
                "RAG platform that parses resumes to generate dynamic interview questions with real-time AI scoring and post-session email reports via Resend."
            ]
        },
        {
            "name": "UPI Offline Mesh",
            "stack": "Java 17, Spring Boot, Spring Data JPA, H2, JUnit 5",
            "meta": "Distributed Backend",
            "bullets": [
                "Simulated offline UPI payments over mesh relay using RSA-2048 + AES-256-GCM encryption with idempotency and optimistic locking."
            ]
        },
        {
            "name": "Smart India Hackathon PS 26153 (DRDO Problem Statement)",
            "stack": "PyTorch (CUDA), scikit-learn, pandas, NumPy",
            "meta": "National Level SIH",
            "bullets": [
                "Developed ML model for network-traffic threat detection evaluated on the benchmark CICIDS2017 intrusion dataset."
            ]
        }
    ]

    for p in projects:
        table_data = [
            [
                Paragraph(f"<b>{p['name']}</b> &nbsp;|&nbsp; <font color='#4B5563' size='7.8'>{p['stack']}</font>", item_title_style),
                Paragraph(f"<i>{p['meta']}</i>", right_meta_style)
            ]
        ]
        t = Table(table_data, colWidths=[420, 136])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t)
        for bullet in p['bullets']:
            story.append(Paragraph(f"• &nbsp;{bullet}", bullet_style))
        story.append(Spacer(1, 1.5))

    story.append(Spacer(1, 2))

    # 6. Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceBefore=1, spaceAfter=3))

    skills_lines = [
        ("Languages:", "C++, JavaScript (ES6+), TypeScript, Python, Java, HTML5, CSS3"),
        ("Frontend:", "React.js, Next.js, Vite, Tailwind CSS, shadcn/ui, Framer Motion, React Hook Form + Zod"),
        ("Backend & DB:", "Node.js, Express.js, FastAPI, Spring Boot, RESTful APIs, PostgreSQL (Neon), MongoDB, SQLite, Firestore, Drizzle ORM"),
        ("AI / ML & Tools:", "RAG Architecture, Gemini Flash, Groq (Llama 3.3), PyTorch, scikit-learn, Clerk, Stripe, Git/GitHub, Docker, Render, Vercel")
    ]

    for category, items in skills_lines:
        story.append(Paragraph(f"<b>{category}</b> &nbsp;{items}", ParagraphStyle(
            'SkillLine',
            parent=body_style,
            fontSize=8.2,
            leading=10.5
        )))

    story.append(Spacer(1, 3))

    # 7. Leadership & Achievements
    story.append(Paragraph("LEADERSHIP & ACHIEVEMENTS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceBefore=1, spaceAfter=3))

    achievements_list = [
        "<b>5th Place — Ignition HackVerse 2026:</b> Technical Team Lead for 4-member team in Healthcare AI Track.",
        "<b>Smart India Hackathon 2026:</b> Selected for internal college round (DRDO Problem Statement PS 26153).",
        "<b>Competitive Programming:</b> CodeChef maximum rating 1717 (3-Star); active problem solver on LeetCode & Codeforces.",
        "<b>Continuous Learning:</b> Microsoft 'AI Agents for Beginners' & ChaiCode Full Stack Web Development Cohort 2026."
    ]

    for ach in achievements_list:
        story.append(Paragraph(f"• &nbsp;{ach}", bullet_style))

    doc.build(story)
    print(f"Generated resume PDF at: {output_path}")

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    os.makedirs("public/resume", exist_ok=True)
    create_resume("public/resume.pdf")
    # Also save a copy inside public/resume/resume.pdf
    import shutil
    shutil.copyfile("public/resume.pdf", "public/resume/resume.pdf")
    print("Copied to public/resume/resume.pdf")

