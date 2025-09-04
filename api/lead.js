export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, city, projectStage, utm_source, utm_medium, utm_campaign } = req.body;
    
    // Validate required fields
    if (!name || !phone || !city) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate unique lead ID
    const leadId = `RK${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

    // Prepare lead data
    const leadData = {
      id: leadId,
      name,
      phone,
      city,
      projectStage: projectStage || 'planning',
      createdAt: new Date().toISOString(),
      source: 'website',
      utm: {
        source: utm_source || 'direct',
        medium: utm_medium || 'website', 
        campaign: utm_campaign || 'organic'
      }
    };

    // In production, save to your database
    console.log('Lead received:', leadData);

    // Send success response
    res.status(200).json({
      success: true,
      leadId,
      message: 'Lead submitted successfully'
    });

  } catch (error) {
    console.error('Lead API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}