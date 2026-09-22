/**
 * CLINICALLY VERIFIED CONDITION DATA
 * Sourced from Wikipedia, World Health Organization (WHO), Cochrane Systematic Reviews,
 * NICE Guidelines, Mayo Clinic, Physiopedia, and peer-reviewed clinical literature.
 */

export const conditions = [
  {
    slug: 'back-pain',
    name: 'Back Pain & Spine Care',
    medicalTerm: 'Low Back Pain (LBP) / Lumbago (ICD-11: ME84.2)',
    category: 'ORTHOPAEDIC & SPINE CARE',
    pageTitle: 'Back Pain Physiotherapy & Spine Rehabilitation | Dr. Jha Centre',
    metaDescription: 'Evidence-based physiotherapy and medical acupuncture for lower back pain, disc herniation, and spinal stiffness at Dr. Jha Centre. Verified medical protocols.',
    shortDescription: 'Scientifically validated rehabilitation for acute lumbar strain, disc herniation, facet joint arthropathy, and chronic mechanical back pain.',
    overview: 'According to the World Health Organization (WHO) and Wikipedia medical consensus, low back pain (LBP) is the leading cause of disability worldwide. It refers to pain, muscle tension, or stiffness localized between the costal margin and the inferior gluteal folds. Over 90% of cases are non-specific mechanical LBP, arising from biomechanical imbalances, intervertebral disc degeneration, ligamentous strain, or deep paraspinal muscle spasms rather than systemic structural disease.',
    pathophysiology: 'Mechanical low back pain typically stems from microtrauma to the lumbar intervertebral discs, facet joints, and sacroiliac articulations. As disc hydration decreases or facet joint cartilage degenerates, load distribution across the vertebral motion segments becomes uneven. This causes reactive spasm of the erector spinae and quadratus lumborum muscles, alongside inhibition and atrophy of deep segmental stabilizers (multifidus and transversus abdominis), leading to a recurrent cycle of pain and spinal instability.',
    classification: 'Classified clinically by symptom duration into Acute (< 6 weeks), Subacute (6–12 weeks), and Chronic (> 12 weeks), or by etiology into Mechanical (non-specific, 90%), Radicular (nerve root compression/sciatica, 5–10%), and Specific Secondary causes (<1%).',
    symptoms: [
      'Dull aching or sharp localized pain across the lumbar spine and lumbosacral junction',
      'Morning stiffness or difficulty achieving upright standing after prolonged sitting',
      'Protective muscle spasms along the paraspinal and gluteal musculature',
      'Pain exacerbated by spinal flexion, heavy lifting, or prolonged static posture',
      'Decreased active trunk range of motion (flexion, extension, and rotation)'
    ],
    redFlags: [
      'Cauda Equina Syndrome signs: Loss of bowel or bladder control, saddle anesthesia (numbness in groin/buttock)',
      'Progressive motor weakness (e.g., foot drop, inability to stand on heels or toes)',
      'Unexplained significant weight loss, fever, or history of malignancy',
      'Severe intractable nocturnal pain unalleviated by positional changes'
    ],
    whenToSeekHelp: [
      'Back pain persists beyond 7 to 10 days without spontaneous improvement',
      'Pain radiates down into the buttock, posterior thigh, or calf',
      'Difficulty performing essential daily tasks such as walking, sitting, or sleeping',
      'Frequent recurrent episodes of "catching" or locking in the lower back'
    ],
    treatmentApproach: [
      'Joint Mobilization & Decompression: Passive Maitland and Mulligan spinal mobilization techniques to restore facet joint mechanics and reduce intradiscal pressure.',
      'Deep Core Motor Control Retraining: Specific activation and endurance retraining of the deep multifidus, transversus abdominis, and pelvic floor muscles.',
      'Myofascial Trigger Point Release: Targeted manual therapy to de-escalate hypertonic quadratus lumborum, piriformis, and psoas muscles.',
      'Medical Acupuncture & Electro-Acupuncture: Stimulation of segmental neuro-reflex points to stimulate endogenous endorphin release and modulate central pain signaling.',
      'Postural & Ergonomic Re-education: Kinetic chain alignment, lifting mechanics, and workplace ergonomic optimization to prevent re-injury.'
    ],
    clinicalEvidence: 'Systematic reviews in The Lancet LBP Series and NICE Guidelines (NG59) establish structured exercise therapy and manual spinal mobilization as first-line conservative treatments. In addition, Cochrane Systematic Reviews and WHO guidelines recognize medical acupuncture as an effective non-pharmacological modality for chronic low back pain relief.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Low back pain', url: 'https://en.wikipedia.org/wiki/Low_back_pain' },
      { name: 'World Health Organization (WHO)', topic: 'Low Back Pain Fact Sheet & Guidelines', url: 'https://www.who.int/news-room/fact-sheets/detail/low-back-pain' },
      { name: 'NICE Guidelines (NG59)', topic: 'Low back pain and sciatica in over 16s: assessment and management', url: 'https://www.nice.org.uk/guidance/ng59' },
      { name: 'The Lancet', topic: 'Lancet Low Back Pain Series', url: 'https://www.thelancet.com/series/low-back-pain' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'How long does it typically take to recover from mechanical back pain?',
        answer: 'Most acute mechanical back pain episodes show substantial relief within 2 to 4 weeks of targeted physical therapy. Chronic back conditions benefit from a 6 to 8 week progressive core stabilization and neuromuscular control program.'
      },
      {
        question: 'How does acupuncture work for back pain according to medical science?',
        answer: 'Medical acupuncture stimulates A-delta and C sensory nerve fibers, which triggers the release of endogenous opioids (endorphins, dynorphins) in the cerebrospinal fluid, reduces local inflammatory cytokines, and de-activates hyperactive myofascial motor trigger points.'
      }
    ]
  },
  {
    slug: 'sciatica',
    name: 'Sciatica & Nerve Compression',
    medicalTerm: 'Lumbar Radiculopathy / Sciatic Neuralgia (ICD-11: 8B93.0)',
    category: 'ORTHOPAEDIC & SPINE CARE',
    pageTitle: 'Sciatica Nerve Pain Relief & Physiotherapy | Dr. Jha Centre',
    metaDescription: 'Evidence-based sciatica treatment, nerve gliding, spinal decompression, and medical acupuncture at Dr. Jha Centre. Relieve radiating leg pain without surgery.',
    shortDescription: 'Targeted neural mobilization, positional decompression, and acupuncture for disc herniation and sciatic nerve root inflammation.',
    overview: 'As documented in Wikipedia and medical neurology literature, sciatica describes radiating pain along the path of the sciatic nerve—the largest single nerve in the human body, arising from the L4 through S3 spinal nerve roots. Rather than a standalone disease, sciatica is a clinical symptom of nerve root irritation, most frequently caused by a herniated lumbar intervertebral disc, degenerative lumbar spinal stenosis, or deep piriformis muscle entrapment.',
    pathophysiology: 'Sciatica develops through a dual mechanism: mechanical compression of the lumbar nerve root by herniated nucleus pulposus material or osteophytes, accompanied by a potent biochemical inflammatory cascade mediated by phospholipase A2, TNF-alpha, and interleukins. This causes intraneural edema, localized ischemia, and heightened mechanical sensitivity (ectopic firing), resulting in sharp, lancinating dermatomal pain down the lower extremity.',
    classification: 'Categorized by primary compressive source: Discogenic Lumbar Radiculopathy (most common at L4-L5 and L5-S1), Lumbar Spondylolisthesis / Stenosis, and Extraspinal Entrapment (Piriformis Syndrome / Deep Gluteal Syndrome).',
    symptoms: [
      'Sharp, shooting, burning, or electric shock-like pain radiating from the lower back through the buttock down the posterior leg into the foot',
      'Dermatomal paresthesia (pins and needles) or numbness along the L4, L5, or S1 sensory distributions (e.g., top of foot or sole)',
      'Unilateral lower extremity muscle weakness (e.g., difficulty heel-walking with L5 deficit, or toe-walking with S1 deficit)',
      'Positive Straight Leg Raise (Lasègue’s test) reproducing radiating leg pain between 30° and 70° of hip flexion',
      'Pain aggravated by prolonged sitting, coughing, sneezing, or forward bending (Valsalva maneuvers)'
    ],
    redFlags: [
      'Acute bilateral sciatica accompanied by bladder incontinence, urinary retention, or fecal incontinence (Cauda Equina Syndrome)',
      'Progressive motor deficit resulting in noticeable foot drop (peroneal nerve weakness)',
      'Rapidly worsening sensory loss in both legs or perianal area'
    ],
    whenToSeekHelp: [
      'Radiating leg pain extends below the knee and persists for more than 1 week',
      'Pain prevents normal walking, sitting at work, or restful sleep',
      'Numbness or tingling is spreading along the calf or foot',
      'Over-the-counter pain medications fail to provide relief'
    ],
    treatmentApproach: [
      'Neurodynamic Mobilization (Nerve Gliding): Gentle neural tensioner and slider exercises that restore longitudinal excursions of the sciatic nerve and reduce intraneural adhesions.',
      'Mechanical Positional Decompression: McKenzie directional preference protocols and gentle lumbar traction to promote centralisation of discogenic symptoms.',
      'Medical Acupuncture & Electro-Stimulation: High-frequency electro-acupuncture along the Huatuojiaji (paravertebral) and Bladder/Gallbladder meridian pathways to suppress neuropathic pain signals and improve microvascular perfusion.',
      'Deep Gluteal & Piriformis Release: Manual myofascial decompression of the deep external rotators of the hip to remove extraspinal compression.',
      'Lumbopelvic Stabilization: Progressive strengthening of the transverse abdominis, gluteus medius, and multifidus to eliminate abnormal shearing loads on the nerve root.'
    ],
    clinicalEvidence: 'Cochrane Systematic Reviews and the British Medical Journal (BMJ) Best Practice highlight that up to 90% of sciatica cases resolve successfully with non-surgical conservative care. Controlled trials demonstrate that combining neurodynamic nerve glides with clinical acupuncture significantly accelerates functional recovery and analgesic efficacy compared to passive rest.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Sciatica', url: 'https://en.wikipedia.org/wiki/Sciatica' },
      { name: 'Mayo Clinic', topic: 'Sciatica - Symptoms and Causes', url: 'https://www.mayoclinic.org/diseases-conditions/sciatica/symptoms-causes/syc-20377435' },
      { name: 'BMJ Best Practice', topic: 'Sciatica / Lumbar Radiculopathy Assessment', url: 'https://bestpractice.bmj.com/topics/en-gb/3000109' },
      { name: 'Physiopedia', topic: 'Sciatica & Neurodynamic Testing', url: 'https://www.physio-pedia.com/Sciatica' }
    ],
    relatedTreatments: [
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'Is surgery always required for a slip disc causing sciatica?',
        answer: 'No. Clinical studies confirm that 80% to 90% of disc herniation sciatica cases improve significantly with structured conservative rehabilitation, spinal decompression, and acupuncture without needing surgical discectomy.'
      },
      {
        question: 'What is the purpose of nerve gliding (neurodynamics)?',
        answer: 'Nerve gliding gently moves the sciatic nerve through its anatomical tunnels, dispersing localized inflammatory fluid, preventing scar tissue adhesions, and restoring normal blood flow within the nerve sheath.'
      }
    ]
  },
  {
    slug: 'knee-pain',
    name: 'Knee Pain & Osteoarthritis',
    medicalTerm: 'Knee Osteoarthritis / Gonarthrosis (ICD-11: FA01) & Patellofemoral Pain Syndrome',
    category: 'ORTHOPAEDIC & MUSCULOSKELETAL',
    pageTitle: 'Knee Pain & Osteoarthritis Physiotherapy | Dr. Jha Centre',
    metaDescription: 'Evidence-based knee physiotherapy for osteoarthritis, meniscus tears, and patellar tracking issues. Non-surgical joint preservation at Dr. Jha Centre.',
    shortDescription: 'Comprehensive joint preservation, quadriceps loading, patellar mobilization, and acupuncture to delay or prevent joint replacement.',
    overview: 'As defined by the Osteoarthritis Research Society International (OARSI) and Wikipedia, knee osteoarthritis (gonarthrosis) is a whole-joint degenerative condition characterized by the progressive breakdown of articular hyaline cartilage, subchondral bone sclerosis, osteophyte formation, and synovial inflammation. It is among the leading causes of physical limitation in older adults, but can be managed exceptionally well with early mechanical unloading and targeted neuromuscular exercise.',
    pathophysiology: 'The knee joint undergoes chondrocyte senescence and enzymatic degradation of the extracellular matrix (loss of collagen type II and aggrecan). This leads to joint space narrowing, uneven force transmission across the medial or lateral tibiofemoral compartments, and subchondral bone remodeling. Secondary quadriceps muscle inhibition (arthrogenic muscle inhibition - AMI) and periarticular muscle tightness exacerbate abnormal joint contact pressures.',
    classification: 'Graded radiologically by the Kellgren-Lawrence Scale (Grade 0: Normal to Grade 4: Severe joint space narrowing with large osteophytes), and functionally assessed using WOMAC (Western Ontario and McMaster Universities Osteoarthritis Index) criteria.',
    symptoms: [
      'Gradual onset of aching joint pain during weight-bearing activities (walking, squatting, or descending stairs)',
      'Joint stiffness after periods of immobility, typically lasting under 30 minutes in the morning (distinguishing it from rheumatoid arthritis)',
      'Audible or palpable crepitus (grinding sensation) during knee flexion and extension',
      'Localized joint line tenderness, bony enlargement, and intermittent mild effusion (swelling)',
      'Progressive reduction in active flexion and extension range of motion with angular deformity (varus/valgus)'
    ],
    redFlags: [
      'Hot, acutely swollen, erythematous knee with fever (suggestive of septic arthritis or acute crystal arthropathy)',
      'Inability to bear any weight following an acute traumatic "pop" (acute ligament rupture or fracture)',
      'True joint locking where the knee cannot be passively straightened (displaced bucket-handle meniscus tear)'
    ],
    whenToSeekHelp: [
      'Knee pain begins restricting daily mobility, walking distance, or stair climbing',
      'The joint feels unstable or threatens to "give way"',
      'Night aching disturbs sleep',
      'You are seeking conservative methods to delay or avoid total knee replacement (TKR)'
    ],
    treatmentApproach: [
      'Targeted Quadriceps & VMO Strengthening: Progressive open and closed kinetic chain exercises to overcome arthrogenic muscle inhibition and absorb ground reaction forces.',
      'Hip Abductor & Gluteal Conditioning: Strengthening gluteus medius and maximus to correct dynamic knee valgus and optimize lower extremity kinetic alignment.',
      'Patellofemoral & Tibiofemoral Mobilization: Gentle Maitland manual glide techniques to restore capsular elasticity and synovial fluid distribution.',
      'Medical Acupuncture & Electro-Acupuncture: Stimulation of peri-patellar and tibial acupoints (ST34, ST36, SP9, SP10, Xiyan) to stimulate local analgesic peptides and reduce inflammatory joint effusion.',
      'Gait Retraining & Biomechanical Offloading: Cadence adjustment, proper footwear guidance, and unloader brace evaluation where indicated.'
    ],
    clinicalEvidence: 'Clinical practice guidelines from the American Academy of Orthopaedic Surgeons (AAOS) and OARSI give land-based exercise therapy the highest level of recommendation (Level 1A) for knee osteoarthritis. A comprehensive Cochrane Systematic Review confirmed that acupuncture provides statistically significant and clinically meaningful improvements in pain relief and physical function compared to sham controls.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Knee osteoarthritis', url: 'https://en.wikipedia.org/wiki/Knee_osteoarthritis' },
      { name: 'OARSI', topic: 'OARSI Guidelines for the Non-Surgical Management of Knee Osteoarthritis', url: 'https://oarsi.org/treatment-guidelines' },
      { name: 'Mayo Clinic', topic: 'Osteoarthritis Overview', url: 'https://www.mayoclinic.org/diseases-conditions/osteoarthritis/symptoms-causes/syc-20351925' },
      { name: 'Cochrane Library', topic: 'Acupuncture for peripheral joint osteoarthritis', url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001977.pub3/full' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'Can physiotherapy help if I have bone-on-bone knee osteoarthritis?',
        answer: 'Yes. Even in advanced cartilage wear, strengthening the quadriceps, hamstrings, and hip stabilizers transfers mechanical load away from the damaged bone surfaces onto strong muscular shock absorbers, substantially reducing pain.'
      },
      {
        question: 'How does acupuncture assist with knee swelling and stiffness?',
        answer: 'Acupuncture increases localized microcirculation, accelerates lymphatic clearance of synovial effusion, and stimulates spinal endorphinergic pathways that modulate persistent knee pain.'
      }
    ]
  },
  {
    slug: 'neck-pain',
    name: 'Neck Pain & Cervical Spondylosis',
    medicalTerm: 'Cervical Spondylosis / Cervicalgia (ICD-11: FA80) & Postural Cervical Strain',
    category: 'ORTHOPAEDIC & SPINE CARE',
    pageTitle: 'Neck Pain & Cervical Spondylosis Care | Dr. Jha Centre',
    metaDescription: 'Relieve neck stiffness, cervical disc compression, and desk-related tech neck with expert physiotherapy and acupuncture at Dr. Jha Centre.',
    shortDescription: 'Evidence-based manual therapy, deep neck flexor retraining, and acupuncture for cervical wear, trapped nerves, and posture fatigue.',
    overview: 'As described in Wikipedia and the NHS medical directory, cervical spondylosis is an umbrella term for age-related and posture-induced wear and tear of the cervical spine, involving intervertebral disc degeneration, uncovertebral joint hypertrophy, and facet arthrosis. In contemporary clinical practice, it is increasingly seen in younger demographics due to prolonged forward-head posture ("Tech Neck") from screen use.',
    pathophysiology: 'For every inch the head moves forward past neutral alignment, the effective gravitational load on the cervical spine increases by roughly 10 pounds. This continuous tensile stress leads to disc dehydration, loss of disc height, formation of compensatory osteophytes (bone spurs), and chronic spasm of the upper trapezius, levator scapulae, and suboccipital muscles. Concurrently, deep cervical postural stabilizers (longus colli, longus capitis) become inhibited and weak.',
    classification: 'Classified into Axial Cervical Neck Pain (musculotendinous and facet origin), Cervical Radiculopathy (nerve root impingement with radiating arm symptoms), and Cervical Myelopathy (spinal cord compression requiring urgent surgical review).',
    symptoms: [
      'Persistent dull ache, burning, or tightness across the posterior neck, base of the skull, and upper trapezius',
      'Cervicogenic headaches originating at the suboccipital region and radiating over the temple into the forehead',
      'Restricted active range of motion when rotating the head (e.g., checking blind spots while driving)',
      'Clicking, popping, or grinding sensations (cervical crepitus) during neck movement',
      'Radiating discomfort or tingling into the shoulder blades, upper chest, or down the arm'
    ],
    redFlags: [
      'Signs of Cervical Myelopathy: Clumsiness with hand dexterity (dropping objects, difficulty buttoning shirts), gait unsteadiness, or hyperreflexia',
      'Sudden severe "thunderclap" headache, visual disturbances, or dysphagia (difficulty swallowing)',
      'Severe progressive bilateral upper extremity numbness or motor weakness'
    ],
    whenToSeekHelp: [
      'Neck stiffness and pain persist beyond 5 to 7 days despite rest and ergonomic adjustments',
      'Headaches occur consistently following computer work or waking in the morning',
      'Pain shoots down into the shoulder, elbow, or fingertips',
      'Neck pain is accompanied by dizziness or lightheadedness upon movement'
    ],
    treatmentApproach: [
      'Suboccipital & Cervical Joint Mobilization: Gentle Maitland passive oscillatory movements and Mulligan sustained natural apophyseal glides (SNAGs) to restore cervical facet mechanics.',
      'Deep Cervical Flexor (DCF) Retraining: Precision biofeedback exercises using cranio-cervical flexion protocols to reactivate the deep longus colli and longus capitis muscles.',
      'Scapular Stabilization & Postural Integration: Strengthening the middle and lower trapezius, rhomboids, and serratus anterior to correct thoracic kyphosis and forward head positioning.',
      'Medical Acupuncture / Dry Needling: Precise insertion into trigger points in the upper trapezius, levator scapulae, and occipital ridge (GB20, BL10, LI4) to induce muscular relaxation and pain relief.',
      'Ergonomic Workstation Reconfiguration: Correct monitor height, keyboard positioning, and postural movement breaks.'
    ],
    clinicalEvidence: 'The Cochrane Systematic Review on Cervical Spine Disorders demonstrates that combining manual therapy with specific neck and scapulothoracic exercise produces superior pain relief and functional improvement compared to either intervention alone or passive modalities.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Cervical spondylosis', url: 'https://en.wikipedia.org/wiki/Cervical_spondylosis' },
      { name: 'NHS UK', topic: 'Cervical Spondylosis Overview & Symptoms', url: 'https://www.nhs.uk/conditions/cervical-spondylosis/' },
      { name: 'Physiopedia', topic: 'Cervical Spondylosis Rehabilitation', url: 'https://www.physio-pedia.com/Cervical_Spondylosis' },
      { name: 'Cochrane Library', topic: 'Exercises for mechanical neck disorders', url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004250.pub5/full' }
    ],
    relatedTreatments: [
      { name: 'Manual Therapy', slug: 'manual-therapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'Can neck physiotherapy relieve frequent cervicogenic headaches?',
        answer: 'Yes. When headaches originate from irritated upper cervical facet joints (C1–C3) or tight suboccipital muscles, manual joint mobilization and trigger point acupuncture resolve the underlying mechanical trigger.'
      },
      {
        question: 'What is "Tech Neck" and can it be fully corrected?',
        answer: '"Tech Neck" refers to postural cervical strain caused by prolonged downward head flexion while looking at screens. It is highly treatable through deep neck flexor strengthening, scapular stabilization, and ergonomic habits.'
      }
    ]
  },
  {
    slug: 'frozen-shoulder',
    name: 'Frozen Shoulder (Adhesive Capsulitis)',
    medicalTerm: 'Adhesive Capsulitis of the Shoulder (ICD-11: FA32.1)',
    category: 'ORTHOPAEDIC & MUSCULOSKELETAL',
    pageTitle: 'Frozen Shoulder & Rotator Cuff Physiotherapy | Dr. Jha Centre',
    metaDescription: 'Targeted physical therapy, capsular stretching, and acupuncture for adhesive capsulitis (frozen shoulder) at Dr. Jha Centre. Accelerate your recovery.',
    shortDescription: 'Specialized 3-phase rehabilitation: pain control, gentle capsular distension, and rotator cuff re-education for severe shoulder stiffness.',
    overview: 'As defined in Wikipedia and by the American Academy of Orthopaedic Surgeons (AAOS), frozen shoulder (adhesive capsulitis) is a debilitating condition characterized by spontaneous onset of pain and progressive, severe restriction of both active and passive glenohumeral motion. It is associated with chronic capsular inflammation, synovial hyperplasia, and dense collagenous fibrosis that literally contracts the shoulder capsule volume.',
    pathophysiology: 'The pathology initiates with chronic synovial inflammation in the glenohumeral joint capsule and the rotator interval. This triggers cytokine-mediated fibroblast proliferation and excessive deposition of Type I and Type III collagen, causing the flexible capsule to thicken, tighten, and contract around the humeral head. The normal axillary fold folds and adheres, restricting external rotation and abduction.',
    classification: 'Clinically divided into three distinct chronological stages: 1. Freezing Stage (Painful, 2–9 months), 2. Frozen Stage (Stiff/Fibrotic, 4–12 months), and 3. Thawing Stage (Resolution/Recovery, 6–24 months).',
    symptoms: [
      'Severe, deep, aching shoulder pain that is notably worse at night and when lying on the affected side',
      'Marked restriction in external rotation, abduction, and internal rotation (the classic capsular pattern)',
      'Severe sudden "catch" of sharp pain when attempting rapid or unexpected reach movements',
      'Inability to reach behind the back (e.g., tucking in a shirt or fastening a bra) or reach overhead to high shelves',
      'Compensatory scapular hiking during arm elevation to bypass stiff glenohumeral mechanics'
    ],
    redFlags: [
      'History of major trauma or fall followed by complete inability to actively raise the arm (suspected massive acute rotator cuff tear or occult fracture)',
      'Shoulder pain accompanied by unexplained redness, heat, systemic fever, or progressive swelling',
      'Left shoulder/arm pain with chest pressure or shortness of breath (mandates immediate cardiac rule-out)'
    ],
    whenToSeekHelp: [
      'Shoulder stiffness begins noticeably interfering with daily dressing, bathing, or grooming',
      'Nocturnal shoulder pain continuously disrupts restful sleep',
      'Shoulder mobility continues decreasing over consecutive weeks',
      'Previous cortisone injections or rest have failed to restore functional range'
    ],
    treatmentApproach: [
      'Stage-Specific Glenohumeral Mobilization: Gentle Grade I-II oscillations during the inflammatory freezing phase for pain relief, progressing to high-grade Maitland/Kaltenborn end-range capsular glides during frozen/thawing phases.',
      'Active-Assisted Range of Motion (AAROM): Pulleys, wand exercises, and finger-ladder protocols performed within pain-free physiological envelopes to prevent worsening contracture.',
      'Medical Acupuncture & Electro-Acupuncture: Targeting shoulder points (LI15, SJ14, SI9, GB21, Jianqian) to modulate subacromial inflammation, alleviate muscular spasm, and enhance local blood flow.',
      'Scapulothoracic Neuromuscular Retraining: Restoring normal scapulohumeral rhythm through serratus anterior and lower trapezius strengthening.',
      'Gentle Capsular Home Stretching Protocols: Specific posterior and inferior capsular stretching protocols tailored to the patient’s exact recovery stage.'
    ],
    clinicalEvidence: 'A comprehensive Cochrane Review on interventions for adhesive capsulitis confirms that physical therapy combined with joint mobilization provides sustained improvements in pain, range of motion, and function. Clinical trials demonstrate that adjunctive medical acupuncture significantly shortens recovery duration compared to unmanaged natural history.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Adhesive capsulitis of the shoulder', url: 'https://en.wikipedia.org/wiki/Adhesive_capsulitis_of_the_shoulder' },
      { name: 'American Academy of Orthopaedic Surgeons (AAOS)', topic: 'Frozen Shoulder - OrthoInfo', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/frozen-shoulder/' },
      { name: 'Mayo Clinic', topic: 'Frozen Shoulder - Diagnosis & Treatment', url: 'https://www.mayoclinic.org/diseases-conditions/frozen-shoulder/diagnosis-treatment/drc-20372690' },
      { name: 'Cochrane Library', topic: 'Physical therapy interventions for shoulder pain and stiffness', url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004258.pub2/full' }
    ],
    relatedTreatments: [
      { name: 'Manual Therapy', slug: 'manual-therapy' },
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'How long does frozen shoulder last without treatment versus with physiotherapy?',
        answer: 'Left unmanaged, adhesive capsulitis can persist for 18 to 36 months. With structured stage-specific physical therapy and acupuncture, patients frequently regain functional movement in a fraction of that time (typically 3 to 6 months).'
      },
      {
        question: 'Should I aggressively force my shoulder into painful stretches?',
        answer: 'No. Aggressive forcing during the initial inflammatory "freezing" stage exacerbates capsular inflammation. Mobilization must be gentle and respectful of biological tissue healing phases.'
      }
    ]
  },
  {
    slug: 'sports-injuries',
    name: 'Sports Injuries & Soft Tissue Recovery',
    medicalTerm: 'Soft Tissue Trauma, Ligamentous Sprains & Tendinopathies (ICD-11: FB50-FB56)',
    category: 'SPORTS & INJURY REHABILITATION',
    pageTitle: 'Sports Injury Physiotherapy & Return-To-Play | Dr. Jha Centre',
    metaDescription: 'Modern sports rehabilitation, ligament sprains, tendon loading, and athletic recovery using PEACE & LOVE principles at Dr. Jha Centre.',
    shortDescription: 'Accelerated, evidence-based athletic recovery for muscle tears, ankle sprains, ACL rehab, and overuse tendinopathies.',
    overview: 'As published in the British Journal of Sports Medicine (BJSM) and Wikipedia, modern sports injury rehabilitation has shifted away from outdated static protocols (such as RICE) toward proactive, biologically staged recovery models like PEACE & LOVE. Whether managing an acute ligament sprain, hamstring strain, or chronic tendinopathy, rehabilitation focuses on early controlled mechanical loading, neuromotor re-education, and structured criteria-based return to sport.',
    pathophysiology: 'Acute soft tissue injuries progress through three biological healing phases: Inflammatory (Days 0–5), Proliferative/Repair (Days 3–21, characterized by granulation and collagen type III synthesis), and Remodeling/Maturation (Day 21 to several months, where collagen type III is cross-linked into resilient type I collagen). Premature immobilization weakens healing tissue, whereas optimal mechanical stress aligns collagen fibers along functional tension lines.',
    classification: 'Classified by tissue type: Ligamentous Sprains (Grade I Micro-tear, Grade II Partial tear, Grade III Complete rupture), Muscular Strains (Grade I–III), and Tendinopathies (Reactive, Dysrepair, and Degenerative stages).',
    symptoms: [
      'Acute localized swelling, hematoma (bruising), and sharp tenderness following sudden athletic movement',
      'Pain elicited upon resisted muscle contraction, passive tissue stretching, or direct palpation',
      'Joint instability or feeling of "giving way" following deceleration or pivot injuries',
      'Loss of athletic power, explosive sprint speed, and reduced eccentric deceleration tolerance',
      'Morning tendon stiffness that "warms up" with light movement but aches severely post-exercise'
    ],
    redFlags: [
      'Immediate inability to bear four steps of weight following ankle or knee trauma (Ottawa Rules for fracture screening)',
      'Visible deformity of the bone contour, profound neurovascular deficit (cold, pale, pulseless extremity)',
      'Audible "pop" followed by rapid joint hemarthrosis within 2 hours (suspected ACL or patellar tendon rupture)'
    ],
    whenToSeekHelp: [
      'Joint swelling develops rapidly following a sports injury',
      'Inability to run, jump, or change directions without sharp discomfort',
      'Recurring muscle strains occurring at the same anatomical site',
      'You are preparing for safe return-to-play after orthopaedic surgery or ligament repair'
    ],
    treatmentApproach: [
      'Modern PEACE & LOVE Acute Staging: Protect, Elevate, Avoid NSAIDs/ice that stunt healing, Compress, Educate; followed by Load, Optimism, Vascularization, and Exercise.',
      'Progressive Eccentric & Isometric Tendon Loading: Heavy Slow Resistance (HSR) protocols to stimulate collagen realignment and increase tendon tensile stiffness.',
      'Proprioceptive & Neuromuscular Coordination Drills: Dynamic perturbation training on wobble boards and single-leg balance systems to restore joint position sense.',
      'Medical Acupuncture & Dry Needling: Intramuscular stimulation to release persistent myofascial trigger points, resolve post-traumatic muscle inhibition, and enhance local healing factors.',
      'Criteria-Based Return-To-Sport Testing: Limb Symmetry Index (LSI > 90% on single-leg hop testing), agility T-tests, and sport-specific biomechanical validation.'
    ],
    clinicalEvidence: 'The landmark British Journal of Sports Medicine publication by Dubois & Esculier (2020) establishes that active mechanical loading and cardiovascular vascularization accelerate soft tissue healing and reduce recurrence rates. Systematic reviews confirm that combining dry needling with progressive exercise enhances pain relief and athletic performance.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Soft tissue injury', url: 'https://en.wikipedia.org/wiki/Soft_tissue_injury' },
      { name: 'British Journal of Sports Medicine (BJSM)', topic: 'Soft-tissue injuries simply need PEACE and LOVE', url: 'https://bjsm.bmj.com/content/54/2/72' },
      { name: 'Physiopedia', topic: 'PEACE and LOVE Principle', url: 'https://www.physio-pedia.com/PEACE_and_LOVE_Principle' },
      { name: 'American Physical Therapy Association (APTA)', topic: 'Sports Physical Therapy Guidelines', url: 'https://www.choosept.com/' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Manual Therapy', slug: 'manual-therapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'Why is the PEACE & LOVE protocol now preferred over RICE?',
        answer: 'Modern sports medicine research shows that excessive icing and anti-inflammatory drugs can delay natural tissue repair. The PEACE & LOVE framework focuses on protecting tissue briefly, then using early progressive loading, blood flow vascularization, and exercise to rebuild strong collagen.'
      },
      {
        question: 'When is an athlete cleared to return to competitive sports?',
        answer: 'Clearance is not based on time alone, but on passing objective clinical milestones: complete pain-free range of motion, at least 90% limb strength symmetry (LSI), and flawless execution of sport-specific cutting and landing tests.'
      }
    ]
  },
  {
    slug: 'stroke-paralysis',
    name: 'Stroke & Paralysis Neuro-Rehabilitation',
    medicalTerm: 'Cerebrovascular Accident (CVA) Sequelae / Hemiplegia (ICD-11: 8B20)',
    category: 'NEUROLOGICAL REHABILITATION',
    pageTitle: 'Stroke Rehabilitation & Paralysis Physiotherapy | Dr. Jha Centre',
    metaDescription: 'Specialized neuro-physiotherapy and acupuncture for stroke recovery, hemiplegia, spasticity, and gait retraining at Dr. Jha Centre.',
    shortDescription: 'Evidence-based neuroplasticity training, Bobath motor re-education, spasticity management, and electro-acupuncture for stroke recovery.',
    overview: 'As defined by the World Health Organization (WHO) and Wikipedia, a stroke (cerebrovascular accident) is an acute focal neurological deficit caused by disrupted cerebral blood supply (ischemic 87% or hemorrhagic 13%). Survivors frequently experience contralateral hemiparesis or hemiplegia, spasticity, gait impairment, and loss of functional independence. Modern neuro-rehabilitation leverages the brain’s intrinsic capacity for neuroplasticity—forming new synaptic connections through intensive, task-specific, repetitive training.',
    pathophysiology: 'Ischemia leads to neuronal necrosis in the primary motor cortex or internal capsule, disrupting descending corticospinal pathways. This causes an initial flaccid stage followed by the emergence of hyperreflexia, muscle spasticity, and synergistic movement patterns due to loss of upper motor neuron inhibitory control. Neuro-rehabilitation stimulates cortical reorganization and unmasks latent neural pathways.',
    classification: 'Assessed using standardized neurological scales: Brunstrom Stages of Motor Recovery (Stage 1: Flaccidity to Stage 6: Isolated normal movement), Modified Ashworth Scale for spasticity, and the Barthel Index for activities of daily living.',
    symptoms: [
      'Unilateral muscle weakness or complete paralysis (hemiplegia) affecting the arm, trunk, and leg',
      'Increased muscle tone and velocity-dependent resistance to passive stretch (spasticity)',
      'Abnormal synergistic movement patterns (e.g., flexor synergy in upper extremity, extensor synergy in lower extremity)',
      'Impaired balance, postural control, and asymmetric hemiparetic circumduction gait',
      'Sensory loss, spatial neglect, or difficulty with motor planning (apraxia)'
    ],
    redFlags: [
      'Acute onset of FAST symptoms: Facial drooping, Arm weakness, Speech difficulty, Time to call emergency services (mandates emergency hospital triage)',
      'Sudden severe worsening of neurological status, altered consciousness, or new-onset seizures',
      'Signs of deep vein thrombosis (DVT) in the paretic leg (calf swelling, warmth, tenderness)'
    ],
    whenToSeekHelp: [
      'Immediately following discharge from acute hospital care to maximize the critical early neuroplastic recovery window',
      'Muscle stiffness and spasticity are causing pain or joint contractures',
      'Difficulty regaining safe transfers, independent standing, or walking capacity',
      'Need for specialized long-term functional motor re-education'
    ],
    treatmentApproach: [
      'Task-Specific Motor Retraining: High-repetition, goal-oriented practice of real-world activities (sit-to-stand, reach-to-grasp, stepping) to drive neuroplastic cortical reorganization.',
      'Neuromuscular Facilitation (Bobath & PNF Concepts): Hands-on guidance to inhibit abnormal tone and facilitate symmetrical movement patterns.',
      'Spasticity & Contracture Prevention: Sustained myofascial stretching, orthotic positioning, and gentle joint mobilization to maintain soft tissue length.',
      'Scalp Acupuncture & Electro-Acupuncture: Stimulation of motor area projection zones (Jiao’s Scalp Acupuncture) and peripheral motor points to enhance cortical excitability and motor evoked potentials.',
      'Gait Retraining & Balance Progression: Weight-bearing biofeedback, cadence control, and assistive device weaning in a safe clinical environment.'
    ],
    clinicalEvidence: 'Guidelines from the American Heart Association / American Stroke Association (AHA/ASA) and WHO strongly recommend intensive, task-oriented physical therapy for motor recovery post-stroke. Clinical systematic reviews and meta-analyses published in stroke rehabilitation journals confirm that combining electro-acupuncture with standard physical therapy significantly improves motor function scores and activities of daily living.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Stroke recovery', url: 'https://en.wikipedia.org/wiki/Stroke_recovery' },
      { name: 'American Heart Association / ASA', topic: 'Guidelines for Adult Stroke Rehabilitation and Recovery', url: 'https://www.stroke.org/' },
      { name: 'World Health Organization (WHO)', topic: 'Stroke and Neurological Disorders', url: 'https://www.who.int/' },
      { name: 'Cochrane Library', topic: 'Acupuncture for stroke rehabilitation', url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004131.pub3/full' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'What is the optimal timeframe to start stroke neuro-rehabilitation?',
        answer: 'Neuro-rehabilitation should commence as soon as the patient is medically stabilized. The first 3 to 6 months represent the peak window of spontaneous neuroplasticity, although significant functional recovery can still be achieved years post-stroke with targeted therapy.'
      },
      {
        question: 'How does scalp acupuncture support stroke recovery?',
        answer: 'Scalp acupuncture stimulates microcurrents over the motor and sensory cortical projection zones, enhancing regional cerebral blood flow, upregulating neurotrophic factors (like BDNF), and facilitating neuro-motor relearning.'
      }
    ]
  },
  {
    slug: 'bells-palsy',
    name: "Bell's Palsy & Facial Nerve Rehabilitation",
    medicalTerm: 'Idiopathic Facial Nerve Palsy / 7th Cranial Nerve Lesion (ICD-11: 8B82.0)',
    category: 'NEUROLOGICAL REHABILITATION',
    pageTitle: "Bell's Palsy & Facial Paralysis Physiotherapy | Dr. Jha Centre",
    metaDescription: "Expert facial neuromuscular re-education, mirror biofeedback, and medical acupuncture for Bell's palsy and facial nerve recovery at Dr. Jha Centre.",
    shortDescription: 'Specialized facial nerve reactivation, mirror therapy, synkinesis prevention, and acupuncture for facial symmetry.',
    overview: "As documented by the National Institute of Neurological Disorders and Stroke (NINDS) and Wikipedia, Bell's palsy is an acute, unilateral peripheral paralysis or paresis of the facial muscles supplied by the 7th cranial nerve (Facial Nerve). Symptoms characteristically peak within 48 to 72 hours, resulting in inability to close the eye, drooping of the corner of the mouth, loss of forehead wrinkles, and altered taste perception.",
    pathophysiology: "The facial nerve becomes edematous and inflamed within the narrow Fallopian canal of the temporal bone (often triggered by viral reactivation such as Herpes Simplex Virus 1). The swelling causes mechanical compression, resulting in localized neuropraxia or axonotmesis. Incomplete or misdirected axonal regeneration can lead to synkinesis (involuntary concurrent muscle contractions, such as eye blinking causing mouth movement).",
    classification: "Clinically evaluated using the House-Brackmann Facial Nerve Grading System (Grade I: Normal facial function to Grade VI: Total facial paralysis), assessing symmetry at rest and during active facial expressions.",
    symptoms: [
      'Rapid onset of unilateral facial weakness with flattening of forehead wrinkles and drooping corner of mouth',
      'Incomplete eyelid closure (lagophthalmos) and upward rolling of the eyeball upon attempted closure (Bell’s Phenomenon)',
      'Loss of the nasolabial fold and drooling from the affected corner of the mouth when drinking',
      'Hyperacusis (abnormal sensitivity to loud sounds in the ipsilateral ear due to stapedius muscle paresis)',
      'Altered or diminished taste sensation on the anterior two-thirds of the tongue'
    ],
    redFlags: [
      'Forehead movement is preserved while lower face is paralyzed (indicates an Upper Motor Neuron / Central lesion such as a Stroke, requiring immediate emergency care)',
      'Vesicular rash in the ear canal or palate accompanied by severe otalgia (suggestive of Ramsay Hunt Syndrome / Herpes Zoster Oticus)',
      'Bilateral simultaneous facial paralysis or slowly progressive paralysis over more than 3 weeks'
    ],
    whenToSeekHelp: [
      'Within the first few days of symptom onset alongside standard medical antiviral/corticosteroid prescription',
      'Difficulty closing the eyelid completely, causing corneal dryness or irritation',
      'Facial movement is recovering unevenly or twitching (synkinesis) is developing',
      'Residual facial weakness persists beyond 4 to 6 weeks'
    ],
    treatmentApproach: [
      'Facial Neuromuscular Re-Education: Gentle, low-force isolated expression exercises using mirror biofeedback to re-establish cortical-facial mapping without encouraging synkinesis.',
      'Medical Acupuncture & Electro-Acupuncture: Precise needle stimulation of motor points (ST4, ST6, ST7, GB14, LI4, Taiyang) to stimulate facial nerve microperfusion and accelerate axonal recovery.',
      'Trophic Facial Massage & Lymphatic Drainage: Gentle manual techniques to maintain muscle suppleness, reduce tissue edema, and prevent soft tissue contractures.',
      'Synkinesis Prevention Protocols: Teaching motor inhibition strategies to decouple involuntary eye-mouth synergistic movements.',
      'Eye Protection Advice: Coordinating daytime lubricating eye drops and nighttime taping to protect the cornea from exposure keratitis.'
    ],
    clinicalEvidence: "A Cochrane Systematic Review and multiple clinical randomized controlled trials demonstrate that specialized facial neuromuscular therapy combined with medical acupuncture improves facial symmetry recovery rates and significantly reduces long-term synkinesis compared to unguided electrical stimulation.",
    reliableSources: [
      { name: 'Wikipedia', topic: "Bell's palsy", url: 'https://en.wikipedia.org/wiki/Bell%27s_palsy' },
      { name: 'NINDS (NIH)', topic: "Bell's Palsy Information Page", url: 'https://www.ninds.nih.gov/health-information/disorders/bells-palsy' },
      { name: 'American Academy of Otolaryngology', topic: "Clinical Practice Guideline: Bell's Palsy", url: 'https://www.entnet.org/' },
      { name: 'Cochrane Library', topic: "Acupuncture for Bell's palsy", url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD002914.pub5/full' }
    ],
    relatedTreatments: [
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: "How long does it take to recover from Bell's palsy?",
        answer: "With prompt medical management, physical therapy, and acupuncture, approximately 70% to 85% of patients begin noticeable recovery within 2 to 3 weeks and achieve excellent recovery within 3 to 6 months."
      },
      {
        question: "Why should strong electrical stimulation be avoided on the face in Bell's palsy?",
        answer: "Modern neuro-physiotherapy guidelines advise against aggressive electric shocks to the facial muscles, as it can cause mass action contractions and trigger aberrant axonal sprouting (synkinesis). Gentle acupuncture and mirror re-education are significantly safer and more effective."
      }
    ]
  },
  {
    slug: 'parkinsons',
    name: "Parkinson's Disease Supportive Rehabilitation",
    medicalTerm: "Parkinson's Disease (ICD-11: 8A00.0) / Hypokinetic Movement Disorder",
    category: 'NEUROLOGICAL REHABILITATION',
    pageTitle: "Parkinson's Disease Physiotherapy & Mobility Care | Dr. Jha Centre",
    metaDescription: "Comprehensive Parkinson's disease physiotherapy, gait cueing, LSVT BIG movement strategies, and acupuncture at Dr. Jha Centre.",
    shortDescription: 'High-amplitude movement retraining, balance optimization, sensory cueing for freezing of gait, and supportive acupuncture.',
    overview: "As described in Wikipedia and by the Movement Disorder Society, Parkinson's disease is a progressive neurodegenerative disorder caused by the loss of dopamine-producing neurons in the substantia nigra pars compacta. While medical pharmacotherapy remains fundamental, clinical physical therapy and supportive acupuncture play an indispensable role in preserving functional mobility, reducing rigidity, improving gait cadence, and preventing falls.",
    pathophysiology: "Depletion of striatal dopamine disrupts the balance of the direct and indirect basal ganglia motor pathways, leading to excessive thalamic inhibition. Clinically, this manifests as bradykinesia (slowness of voluntary movement), lead-pipe or cogwheel rigidity, resting tremor, and impaired postural reflexes. External sensory cues (auditory, visual) can bypass defective basal ganglia circuitry by recruiting intact cortical-cerebellar pathways.",
    classification: "Staged using the Hoehn and Yahr Scale (Stage 1: Unilateral motor symptoms to Stage 5: Wheelchair-bound/bedridden) and monitored via the Unified Parkinson's Disease Rating Scale (MDS-UPDRS).",
    symptoms: [
      'Bradykinesia: Progressive slowness and reduction in amplitude of repetitive movements (e.g., finger tapping, small shuffling steps)',
      'Muscular Rigidity: Sustained stiffness and resistance to passive limb movement throughout the full range',
      'Resting Tremor: 4–6 Hz unilateral or asymmetric "pill-rolling" tremor that subsides during purposeful voluntary action',
      'Postural Instability & Loss of Balance: Impaired automatic righting reflexes, leading to increased fall risk',
      'Freezing of Gait (FOG): Sudden transient inability to step forward, feeling as if the feet are "glued to the floor"'
    ],
    redFlags: [
      'Early severe postural instability with frequent unexplained falls in the first year (suggestive of Progressive Supranuclear Palsy - PSP)',
      'Early autonomic failure (severe orthostatic hypotension, urinary incontinence) or cerebellar signs (suggestive of Multiple System Atrophy - MSA)',
      'Rapid disease progression with poor responsiveness to levodopa medication'
    ],
    whenToSeekHelp: [
      'Early in the diagnosis to establish baseline functional fitness and neuroprotective exercise habits',
      'Gait is becoming noticeably slower, shuffling, or episodes of "freezing" are occurring',
      'Muscle stiffness is causing postural rounding (camptocormia) or neck/back discomfort',
      'Loss of confidence with balance, transfers, or stair navigation'
    ],
    treatmentApproach: [
      'High-Amplitude Movement Training (LSVT BIG Concepts): Large-magnitude, exaggerated motor drills to recalibrate internal perception of movement size and speed.',
      'Sensory Cueing Strategies: Visual floor markers and rhythmic metronome auditory cues to bypass basal ganglia deficits and resolve gait freezing.',
      'Dynamic Balance & Fall Prevention Drills: Dual-task cognitive-motor training, obstacle navigation, and reactive balance stepping exercises.',
      'Supportive Medical Acupuncture: Target points (Du20, GB20, LI4, LV3, ST36) to modulate neuromuscular rigidity, improve sleep quality, and alleviate somatic discomfort.',
      'Trunk Flexibility & Rotational Mobility: Axial rotation exercises to counteract flexed posture and maintain ribcage and spinal mobility.'
    ],
    clinicalEvidence: "The European Physiotherapy Guideline for Parkinson's Disease and NICE Guidelines (NG71) strongly endorse early, structured physical therapy to preserve functional independence and reduce fall incidence. Cochrane Reviews affirm that specialized exercise interventions improve gait speed, stride length, and balance confidence.",
    reliableSources: [
      { name: 'Wikipedia', topic: "Parkinson's disease", url: 'https://en.wikipedia.org/wiki/Parkinson%27s_disease' },
      { name: 'Parkinson’s Foundation', topic: "Physical Therapy & Parkinson's", url: 'https://www.parkinson.org/' },
      { name: 'NICE Guidelines (NG71)', topic: "Parkinson's disease in adults: diagnosis and management", url: 'https://www.nice.org.uk/guidance/ng71' },
      { name: 'Cochrane Library', topic: "Physiotherapy for Parkinson's disease", url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD002817.pub4/full' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: "Can physical therapy slow the progression of Parkinson's symptoms?",
        answer: "Yes. Vigorous, high-intensity exercise promotes neuroplasticity, elevates brain-derived neurotrophic factor (BDNF), and preserves neuromuscular coordination, significantly delaying physical disability."
      },
      {
        question: "How do sensory cues help someone who 'freezes' while walking?",
        answer: "Freezing happens when the basal ganglia fail to sequence automated movements. Visual cues (like stepping over a line) or auditory beats engage the conscious visual-motor cortex, bypassing the basal ganglia block."
      }
    ]
  },
  {
    slug: 'plantar-fasciitis',
    name: 'Plantar Fasciitis & Heel Pain',
    medicalTerm: 'Plantar Fasciopathy / Calcaneal Spur Syndrome (ICD-11: FB55.0)',
    category: 'ORTHOPAEDIC & MUSCULOSKELETAL',
    pageTitle: 'Plantar Fasciitis & Heel Pain Physiotherapy | Dr. Jha Centre',
    metaDescription: 'Evidence-based plantar fasciitis physical therapy, high-load strength training, calf release, and acupuncture at Dr. Jha Centre.',
    shortDescription: 'High-load eccentric loading (Rathleff protocol), arch biomechanical correction, and acupuncture for stubborn morning heel pain.',
    overview: 'As defined in Wikipedia and clinical orthopaedic literature, plantar fasciitis is a degenerative pathology (plantar fasciopathy) of the dense fibrous aponeurosis that supports the medial longitudinal arch of the foot. Characterized by sharp, stabbing pain under the medial calcaneal tuberosity, it is classically triggered upon taking the very first steps in the morning or standing after prolonged rest.',
    pathophysiology: 'Rather than a primary acute inflammatory condition, histology demonstrates non-inflammatory tissue degeneration: collagen disorganization, hypervascularity, micro-tearing, and thickening of the plantar fascia insertion. Excessive tensile strain is created by tight gastrocnemius-soleus complexes, pes planus (flat feet) or pes cavus (high arches), and rapid increases in weight-bearing volume.',
    classification: 'Classified clinically based on symptom chronicity (Acute < 6 weeks, Chronic > 3 months) and evaluated using the Windlass Test and medial calcaneal palpation.',
    symptoms: [
      'Sharp, piercing pain at the inferior medial heel on taking the first few steps out of bed in the morning',
      'Pain that eases temporarily with light walking but worsens progressively toward the end of the day or after prolonged standing',
      'Marked tenderness on direct palpation of the medial calcaneal tubercle',
      'Positive Windlass Test: Exacerbation of heel pain during passive great toe dorsiflexion',
      'Tightness in the Achilles tendon and restriction in passive ankle dorsiflexion'
    ],
    redFlags: [
      'Burning heel pain accompanied by numbness or tingling radiating into the sole and toes (suspected Tarsal Tunnel Syndrome)',
      'Severe pain unalleviated by non-weight-bearing rest or nocturnal calcaneal throbbing (suspected Calcaneal Stress Fracture)',
      'Bilateral heel and multiple peripheral joint swelling (requires evaluation for Spondyloarthritis)'
    ],
    whenToSeekHelp: [
      'Morning heel pain persists for more than 2 weeks without relief',
      'You are modifying your walking gait, causing secondary knee, hip, or lower back strain',
      'Rest and standard store-bought insoles have failed to resolve symptoms',
      'Standing at work is becoming unbearable'
    ],
    treatmentApproach: [
      'High-Load Strength Training (Rathleff Protocol): Heavy slow heel raises with a rolled towel under the toes to maximize tensile loading on the plantar fascia and stimulate collagen remodeling.',
      'Plantar Fascia & Gastrocnemius-Soleus Stretching: Targeted tissue stretches performed prior to taking the first morning steps to prevent micro-tearing of contracted fibers.',
      'Medical Acupuncture & Dry Needling: Needle release of myofascial trigger points in the gastrocnemius, soleus, and tibialis posterior, alongside local peri-calcaneal points (KD3, BL60, Ashi points) to relieve pain.',
      'Subtalar & Midtarsal Joint Mobilization: Manual restoration of midfoot mobility to normalize load distribution across the foot arches.',
      'Biomechanical & Orthotic Assessment: Dynamic arch taping and tailored footwear recommendations.'
    ],
    clinicalEvidence: 'The Journal of Orthopaedic & Sports Physical Therapy (JOSPT) Clinical Practice Guidelines give strong evidence (Level A) to manual therapy, stretching, and progressive high-load resistance training for plantar fasciitis. Systematic reviews confirm that combining dry needling/acupuncture with eccentric loading produces superior pain reduction compared to passive orthotics alone.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Plantar fasciitis', url: 'https://en.wikipedia.org/wiki/Plantar_fasciitis' },
      { name: 'JOSPT Guidelines', topic: 'Heel Pain - Plantar Fasciitis: Clinical Practice Guidelines', url: 'https://www.jospt.org/' },
      { name: 'Mayo Clinic', topic: 'Plantar Fasciitis Overview & Treatment', url: 'https://www.mayoclinic.org/diseases-conditions/plantar-fasciitis/symptoms-causes/syc-20354846' },
      { name: 'Physiopedia', topic: 'Plantar Fasciitis Rehabilitation', url: 'https://www.physio-pedia.com/Plantar_Fasciitis' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'Does a heel bone spur cause plantar fasciitis?',
        answer: 'Not directly. A calcaneal spur is a bony adaptation to chronic traction at the insertion. Many people with heel spurs have no pain, while many with severe plantar fasciitis have no spur. The pain arises from the degenerative fascial tissue itself.'
      },
      {
        question: 'Why is morning pain so severe in plantar fasciitis?',
        answer: 'During sleep, the foot rests in plantarflexion, allowing the fascia to contract and heal in a shortened position. Taking the first morning step abruptly stretches this shortened tissue, causing sharp micro-trauma.'
      }
    ]
  },
  {
    slug: 'tennis-elbow',
    name: 'Tennis Elbow (Lateral Epicondylalgia)',
    medicalTerm: 'Lateral Epicondylalgia / Extensor Carpi Radialis Brevis Tendinopathy (ICD-11: FB54.0)',
    category: 'ORTHOPAEDIC & MUSCULOSKELETAL',
    pageTitle: 'Tennis Elbow Physiotherapy & Tendon Rehab | Dr. Jha Centre',
    metaDescription: 'Targeted physiotherapy, eccentric loading, manual therapy, and acupuncture for lateral epicondylitis (tennis elbow) at Dr. Jha Centre.',
    shortDescription: 'Progressive wrist extensor tendon loading, radial head mobilization, and dry needling for stubborn outer elbow pain.',
    overview: 'As documented in Wikipedia and sports medicine literature, tennis elbow (lateral epicondylalgia or lateral epicondylitis) is an overuse tendinopathy affecting the common extensor origin at the lateral humeral epicondyle. It primarily involves the tendon of the Extensor Carpi Radialis Brevis (ECRB). Contrary to its name, over 90% of cases occur in non-athletes due to repetitive occupational computer typing, manual lifting, or gripping activities.',
    pathophysiology: 'Repetitive eccentric contractions and sustained gripping generate tensile and shearing stress at the tenoperiosteal junction of the ECRB. Pathophysiologically, it represents an angiofibroblastic tendinosis—characterized by hypercellularity, neurovascular ingrowth (neovascularization), and disorganized collagen synthesis with an absence of traditional acute inflammatory cells.',
    classification: 'Clinically assessed using specific orthopaedic provocation tests: Cozen’s test (resisted wrist extension with radial deviation), Mill’s test (passive wrist flexion with pronated forearm), and Maudsley’s test (resisted middle finger extension).',
    symptoms: [
      'Burning or sharp pain over the lateral epicondyle radiating down the extensor surface of the forearm',
      'Pain aggravated by gripping objects (e.g., turning a door handle, holding a coffee cup, or shaking hands)',
      'Weakness in grip strength due to pain inhibition',
      'Morning stiffness and aching in the outer elbow after repetitive arm use the preceding day',
      'Tenderness on direct focal palpation just distal to the lateral epicondyle'
    ],
    redFlags: [
      'Pain accompanied by neck stiffness or paresthesia radiating down into the radial fingers (mandates Cervical C6 Radiculopathy rule-out)',
      'Sudden swelling, warmth, and erythema over the posterior olecranon (suspected Septic Olecranon Bursitis)',
      'Motor weakness in finger extension without lateral elbow pain (suspected Radial Tunnel / Posterior Interosseous Nerve Entrapment)'
    ],
    whenToSeekHelp: [
      'Elbow pain has persisted for over 2 to 3 weeks and simple rest has failed to resolve it',
      'Gripping tools, typing, or lifting everyday items causes sharp forearm discomfort',
      'You have received previous steroid injections with only temporary relief'
    ],
    treatmentApproach: [
      'Progressive Eccentric & Isometric Tendon Loading: Heavy-slow wrist extension and eccentric forearm supination exercises (Tyler Twist protocols) to stimulate tendon remodeling.',
      'Manual Therapy & Radial Head Mobilization: Mulligan Mobilization with Movement (MWM) lateral glides to immediately diminish pain during gripping.',
      'Medical Acupuncture & Dry Needling: Targeting hyperactive trigger points in the ECRB, supinator, and extensor digitorum communis (LI11, LI10, LU5, Ashi points) to relieve neurogenic tension.',
      'Deep Transverse Friction Massage (DTFM): Controlled mechanical friction to break down cross-linked adhesions and enhance local collagen alignment.',
      'Ergonomic & Tool Modification: Grip size adjustments, ergonomic vertical mouse implementation, and counterforce bracing during required tasks.'
    ],
    clinicalEvidence: 'Systematic reviews in the British Journal of Sports Medicine (BJSM) and Cochrane Reviews confirm that active exercise therapy focused on eccentric tendon loading combined with manual mobilization produces superior long-term resolution compared to cortisone injections, which carry high recurrence rates.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Tennis elbow', url: 'https://en.wikipedia.org/wiki/Tennis_elbow' },
      { name: 'British Journal of Sports Medicine (BJSM)', topic: 'Lateral Epicondylalgia Management', url: 'https://bjsm.bmj.com/' },
      { name: 'Mayo Clinic', topic: 'Tennis Elbow - Diagnosis and Treatment', url: 'https://www.mayoclinic.org/diseases-conditions/tennis-elbow/diagnosis-treatment/drc-20351991' },
      { name: 'Physiopedia', topic: 'Lateral Epicondyle Tendinopathy', url: 'https://www.physio-pedia.com/Lateral_Epicondyle_Tendinopathy' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Manual Therapy', slug: 'manual-therapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'Why are steroid injections no longer recommended as first-line for tennis elbow?',
        answer: 'While cortisone can provide brief temporary relief, clinical trials demonstrate that it weakens tendon collagen architecture and leads to a significantly higher rate of long-term recurrence compared to progressive physical therapy.'
      },
      {
        question: 'How long does it take for a chronic tendinopathy to heal?',
        answer: 'Because tendon collagen remodeling is a biologically gradual process, structured rehabilitation typically takes 6 to 12 weeks of progressive loading to build lasting tensile strength.'
      }
    ]
  },
  {
    slug: 'carpal-tunnel',
    name: 'Carpal Tunnel Syndrome (CTS)',
    medicalTerm: 'Median Nerve Entrapment Neuropathy at the Wrist (ICD-11: 8C10.0)',
    category: 'ORTHOPAEDIC & MUSCULOSKELETAL',
    pageTitle: 'Carpal Tunnel Syndrome Physiotherapy & Relief | Dr. Jha Centre',
    metaDescription: 'Non-surgical physiotherapy, nerve gliding, wrist mobilization, and acupuncture for carpal tunnel syndrome at Dr. Jha Centre.',
    shortDescription: 'Evidence-based median nerve flossing, flexor retinaculum mobilization, and acupuncture for wrist numbness and tingling.',
    overview: 'As described in Wikipedia and by the American Academy of Orthopaedic Surgeons (AAOS), carpal tunnel syndrome (CTS) is the most common entrapment neuropathy of the upper extremity. It occurs when the median nerve is compressed as it passes through the rigid fibro-osseous carpal tunnel beneath the transverse carpal ligament at the wrist, resulting in pain, paresthesias, and sensory loss in the radial hand digits.',
    pathophysiology: 'Elevated hydrostatic pressure within the enclosed carpal canal causes chronic mechanical compression and venous congestion of the median nerve microcirculation. This results in localized intraneural ischemia, demyelination of large sensory fibers, and axonal degeneration. Sustained repetitive wrist flexion/extension, keyboard work, fluid retention, or tenosynovial hypertrophy of the nine flexor tendons are primary contributors.',
    classification: 'Staged into Mild (intermittent sensory paresthesias), Moderate (persistent sensory loss, nocturnal waking), and Severe (thenar muscle atrophy, motor weakness) and confirmed via Phalen’s test, Tinel’s sign, and electrodiagnostic nerve conduction studies (NCS).',
    symptoms: [
      'Nocturnal burning pain, numbness, and tingling in the thumb, index finger, middle finger, and radial half of the ring finger',
      'The classic "flick sign": Needing to shake or flick the hand vigorously upon waking to restore sensation',
      'Pain or aching radiating proximally up the anterior forearm toward the elbow',
      'Reduced two-point discrimination and tactile dexterity (difficulty buttoning clothing or holding pens)',
      'Thenar muscle weakness (difficulty with thumb abduction and opposition) and dropping objects in severe cases'
    ],
    redFlags: [
      'Visible atrophy/wasting of the thenar eminence (base of thumb musculature) indicating irreversible axonal loss without prompt intervention',
      'Bilateral rapid onset of weakness accompanied by proximal shoulder girdle weakness (suspected systemic polyneuropathy)',
      'Severe pain accompanied by pale, cold fingers and absent radial pulse'
    ],
    whenToSeekHelp: [
      'Nighttime tingling regularly wakes you from sleep',
      'Numbness persists during daytime typing, driving, or holding a smartphone',
      'You are noticing weakness in your pinch grip or dropping everyday items',
      'You are seeking conservative care to prevent surgical carpal tunnel release'
    ],
    treatmentApproach: [
      'Median Nerve & Tendon Gliding Protocols: Specific sequential gliding exercises to increase longitudinal nerve excursion through the carpal canal and reduce intraneural edema.',
      'Carpal Bone & Flexor Retinaculum Mobilization: Manual soft tissue mobilization of the transverse carpal ligament and radiocarpal joint to expand carpal canal compliance.',
      'Medical Acupuncture & Electro-Acupuncture: Precise needle stimulation of median nerve points (PC7, PC6, LI4, LU7) to increase local nerve perfusion and decrease pain signaling.',
      'Neutral Wrist Splinting Advice: Guidance on nocturnal splinting in 0° neutral position to minimize intra-tunnel pressure.',
      'Ergonomic Workstation Optimization: Neutral keyboard angles and vertical mouse positioning to prevent sustained wrist extension.'
    ],
    clinicalEvidence: 'A landmark randomized clinical trial published in The Lancet and Cochrane Systematic Reviews found that manual therapy and nerve mobilization achieved clinical outcomes equivalent to surgical decompression at 1-year follow-up for mild to moderate carpal tunnel syndrome, with fewer complications.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Carpal tunnel syndrome', url: 'https://en.wikipedia.org/wiki/Carpal_tunnel_syndrome' },
      { name: 'American Academy of Orthopaedic Surgeons (AAOS)', topic: 'Management of Carpal Tunnel Syndrome Evidence-Based Guideline', url: 'https://www.aaos.org/' },
      { name: 'Mayo Clinic', topic: 'Carpal Tunnel Syndrome Symptoms & Causes', url: 'https://www.mayoclinic.org/diseases-conditions/carpal-tunnel-syndrome/symptoms-causes/syc-20355603' },
      { name: 'Cochrane Library', topic: 'Non-surgical treatment for carpal tunnel syndrome', url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001552.pub2/full' }
    ],
    relatedTreatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' },
      { name: 'Manual Therapy', slug: 'manual-therapy' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'Can carpal tunnel syndrome be cured without surgery?',
        answer: 'Yes. Clinical research confirms that conservative physical therapy—including median nerve glides, carpal bone mobilization, neutral nighttime splinting, and acupuncture—resolves mild to moderate CTS in a vast majority of patients.'
      },
      {
        question: 'Why do symptoms predominantly flare up at night?',
        answer: 'During sleep, wrists naturally curl into flexion, which dramatically elevates carpal tunnel pressure. Decreased muscle pump activity also leads to venous pooling and transient nerve hypoxia.'
      }
    ]
  },
  {
    slug: 'vertigo',
    name: 'Vertigo & Vestibular Dysfunction',
    medicalTerm: 'Benign Paroxysmal Positional Vertigo (BPPV / ICD-11: AB31.0) & Vestibular Hypofunction',
    category: 'SPECIALIZED & WELLNESS CARE',
    pageTitle: 'Vertigo & Vestibular Balance Rehabilitation | Dr. Jha Centre',
    metaDescription: 'Targeted canalith repositioning (Epley maneuver), vestibular rehabilitation therapy (VRT), and balance care at Dr. Jha Centre.',
    shortDescription: 'Canalith repositioning maneuvers, gaze stabilization (VOR), and vestibular therapy for dizziness and positional spinning.',
    overview: 'As defined in Wikipedia and clinical otoneurology guidelines, Benign Paroxysmal Positional Vertigo (BPPV) is the most prevalent peripheral vestibular disorder, causing brief episodes of intense rotational vertigo provoked by changes in head position relative to gravity. Vestibular rehabilitation therapy (VRT) offers evidence-based physical maneuvers that completely resolve BPPV and restore balance equilibrium.',
    pathophysiology: 'BPPV occurs when calcium carbonate otoconia crystals dislodge from the gelatinous matrix of the utricle and migrate into one of the fluid-filled semicircular canals (most frequently the posterior canal, canalithiasis). When the head rotates in the plane of the affected canal, the free-floating crystals generate abnormal endolymph fluid displacement, deflecting the cupula and sending false rotational signals to the vestibular nuclei.',
    classification: 'Diagnosed via the Dix-Hallpike Maneuver (for posterior/anterior canals) and Supine Roll Test (for horizontal canal), characterized by latency, transient duration (< 60s), and torsional upbeating nystagmus.',
    symptoms: [
      'Sudden, intense spinning sensation (rotational vertigo) lasting 10 to 60 seconds triggered by rolling over in bed, looking up, or bending down',
      'Associated autonomic symptoms including nausea, lightheadedness, and cold sweats during acute episodes',
      'Persistent unsteadiness and dysequilibrium between spinning attacks',
      'Absence of hearing loss or ringing in the ear (tinnitus), which helps rule out Meniere’s disease'
    ],
    redFlags: [
      'Vertigo accompanied by the 5 D’s: Dizziness, Diplopia (double vision), Dysarthria (slurred speech), Dysphagia (difficulty swallowing), Dysmetria (ataxia) — mandates acute Stroke rule-out (HINTS exam)',
      'New-onset unilateral hearing loss or profound neurological focal signs',
      'Continuous non-positional vertigo lasting days without abatement'
    ],
    whenToSeekHelp: [
      'Rolling over in bed or looking up causes sudden room-spinning sensations',
      'Feelings of dizziness make walking or driving unsafe',
      'Previous anti-vertigo medications have caused drowsiness without resolving the root mechanical cause'
    ],
    treatmentApproach: [
      'Canalith Repositioning Maneuvers: Particle repositioning maneuvers (such as the Epley or Semont maneuver) tailored to the exact canal involved to guide crystals back into the utricle.',
      'Gaze Stabilization Exercises (VOR x1 & VOR x2): Vestibulo-ocular reflex training to eliminate visual blurring during head movements.',
      'Habituation & Balance Training: Progressive exposure protocols (Brandt-Daroff drills) and dynamic balance perturbations to retrain vestibular-visual-somatosensory integration.',
      'Supportive Acupuncture: Modulating autonomic overactivation and alleviating post-vertigo muscular tension in the cervical spine.'
    ],
    clinicalEvidence: 'The American Academy of Otolaryngology-Head and Neck Surgery (AAO-HNS) Clinical Practice Guideline awards Canalith Repositioning Maneuvers a strong Level 1A recommendation, noting an 85% to 95% single-to-two-session resolution rate for BPPV, significantly outperforming pharmacological suppressants.',
    reliableSources: [
      { name: 'Wikipedia', topic: 'Benign paroxysmal positional vertigo', url: 'https://en.wikipedia.org/wiki/Benign_paroxysmal_positional_vertigo' },
      { name: 'AAO-HNS Guidelines', topic: 'Clinical Practice Guideline: BPPV', url: 'https://www.entnet.org/' },
      { name: 'Mayo Clinic', topic: 'BPPV Diagnosis and Canalith Repositioning', url: 'https://www.mayoclinic.org/diseases-conditions/vertigo/diagnosis-treatment/drc-20370060' },
      { name: 'Vestibular Disorders Association (VEDA)', topic: 'Vestibular Rehabilitation Therapy', url: 'https://vestibular.org/' }
    ],
    relatedTreatments: [
      { name: 'Manual Therapy', slug: 'manual-therapy' },
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy' },
      { name: 'Medical Acupuncture', slug: 'acupuncture' }
    ],
    relatedBranches: [
      { name: 'Mira Road', slug: 'mira-road' },
      { name: 'Vasai', slug: 'vasai' },
      { name: 'Surat', slug: 'surat' }
    ],
    faqs: [
      {
        question: 'How quickly does the Epley maneuver cure positional vertigo?',
        answer: 'Clinical trials demonstrate that 85% to 90% of posterior canal BPPV cases are successfully cured within 1 to 2 targeted repositioning sessions in our clinic.'
      },
      {
        question: 'Why do motion sickness pills not cure BPPV?',
        answer: 'Medications only dull the brain’s perception of nausea without moving the physical crystals out of the semicircular canal. Mechanical repositioning maneuvers fix the actual root cause.'
      }
    ]
  }
]

export const getConditionBySlug = (slug) => {
  if (!slug) return null
  return conditions.find((c) => c.slug === slug.toLowerCase())
}
