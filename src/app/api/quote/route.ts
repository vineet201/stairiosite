import { NextRequest, NextResponse } from 'next/server';
import { createQuoteSubmission } from '@/lib/quote-store';

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

    const result = await createQuoteSubmission({
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
      {
        message:
          result.storage === 'mongodb'
            ? 'Quote request submitted successfully'
            : 'Quote request submitted successfully and saved locally',
        id: result.quote.id,
        storage: result.storage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Quote submission error:', error);

    const isMongoConnectionError =
      error instanceof Error &&
      (error.name === 'MongooseServerSelectionError' ||
        error.message.includes('MongoDB Atlas cluster') ||
        error.message.includes('ReplicaSetNoPrimary'));

    return NextResponse.json(
      {
        error: isMongoConnectionError
          ? 'MongoDB connection failed. Add this machine public IP 47.31.122.148 to MongoDB Atlas Network Access, then try again.'
          : 'Failed to submit quote request. Please try again.',
      },
      { status: isMongoConnectionError ? 503 : 500 }
    );
  }
}
