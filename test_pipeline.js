import { createComplaintRecord } from './src/services/complaint.service.js';

async function testPipeline() {
  console.log("=== Testing Pipeline: POST /api/complaints -> Gemini -> Routing Engine -> Govt Adapter -> External ID ===");

  const testPayload = {
    title: "Severe Road Asphalt Pothole & Cavity",
    description: "Deep pothole measuring 4ft wide causing traffic damage",
    category: "Roads",
    priority: "High",
    address: "742 Evergreen Terrace",
    reportedBy: "Taiba Imtiaz"
  };

  const result = await createComplaintRecord(testPayload);

  console.log("\n✅ Pipeline Result:");
  console.log("Internal Complaint ID:", result.id);
  console.log("External Complaint ID:", result.externalId);
  console.log("Authority Name:", result.authorityName);
  console.log("Authority Code:", result.authorityCode);
  console.log("Department:", result.department);
  console.log("Timeline Events:", JSON.stringify(result.timeline, null, 2));

  if (result.externalId && result.externalId.startsWith("GOV-")) {
    console.log("\n🎉 SUCCESS: External Complaint ID verified successfully!");
    process.exit(0);
  } else {
    console.error("\n❌ FAILED: External Complaint ID not generated correctly.");
    process.exit(1);
  }
}

testPipeline();
