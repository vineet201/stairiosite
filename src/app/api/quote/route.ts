import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, company, phone, serviceType, budgetRange, timeline, projectDescription } = body;

    // Validation
    if (!name || !email || !serviceType || !budgetRange || !timeline || !projectDescription) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    await connectDB();

    const quote = await Quote.create({
      name,
      email,
      company,
      phone,
      serviceType,
      budgetRange,
      timeline,
      projectDescription,
    });

    return NextResponse.json(
      { message: 'Quote request submitted successfully', id: quote._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please try again.' },
      { status: 500 }
    );
  }
}
