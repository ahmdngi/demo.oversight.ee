const fs = require('fs');

let civilHtml = fs.readFileSync('civil.html', 'utf8');

// Find the start of <main> and end of </main>
let mainStartIndex = civilHtml.indexOf('<main>');
let mainEndIndex = civilHtml.indexOf('</main>') + '</main>'.length;

let header = civilHtml.substring(0, mainStartIndex);
let footer = civilHtml.substring(mainEndIndex);

// Fix the title and breadcrumb in header
header = header.replace('<title>Civil | SAC Arabia</title>', '<title>Earthworks and TOCK System | SAC Arabia</title>');
header = header.replace('name="description" content="Civil works, site preparation, and building materials supply in Saudi Arabia."', 'name="description" content="Earthworks, excavation, and TOCK non-explosive chemical rock-breaking services for industrial projects in Saudi Arabia."');
header = header.replace('name="keywords" content="Civil works KSA, concrete supply, steel structures, building materials Saudi Arabia"', 'name="keywords" content="earthwork Saudi Arabia, excavation KSA, site preparation, TOCK system, non-explosive rock breaking"');

const mainContent = `<main>
        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style="max-width: 900px;">
                <h3 class="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Earthworks and TOCK System</h3>
                <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="service.html">Services</a></li>
                    <li class="breadcrumb-item"><a href="constructionandengineering.html">Construction and Engineering</a></li>
                    <li class="breadcrumb-item active" style="color:#D07517">Earthworks and TOCK System</li>
                </ol>
            </div>
        </div>

        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="row align-items-center g-5">
                    <div class="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <img src="img/service-7.jpg" class="img-fluid rounded" alt="Earthworks" style="width: 100%; object-fit: contain;" loading="lazy" decoding="async">
                    </div>
                    <div class="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                        <div class="section-title text-start mb-4">
                            <h4 class="sub-title pe-3 mb-0">Core Services</h4>
                            <h2 class="display-5 mb-4">Complete Earthworks Services</h2>
                        </div>
                        <p class="mb-4">SAC Arabia provides complete earthworks services for infrastructure and industrial projects across Saudi Arabia, including:</p>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6">
                                <p class="text-secondary mb-2"><i class="fa fa-check text-primary me-2"></i> Site preparation</p>
                                <p class="text-secondary mb-2"><i class="fa fa-check text-primary me-2"></i> Excavation</p>
                                <p class="text-secondary mb-2"><i class="fa fa-check text-primary me-2"></i> Trenching</p>
                                <p class="text-secondary mb-0"><i class="fa fa-check text-primary me-2"></i> Backfilling</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="text-secondary mb-2"><i class="fa fa-check text-primary me-2"></i> Compaction</p>
                                <p class="text-secondary mb-2"><i class="fa fa-check text-primary me-2"></i> Grading, levelling and site formation</p>
                                <p class="text-secondary mb-0"><i class="fa fa-check text-primary me-2"></i> Dewatering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5" style="background: rgba(10, 42, 74, 0.03);">
            <div class="container py-5">
                <div class="row align-items-center g-5">
                    <div class="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div class="section-title text-start mb-4">
                            <h4 class="sub-title pe-3 mb-0">Innovation</h4>
                            <h2 class="display-5 mb-4">TOCK&reg; Rock Breaking Technology</h2>
                        </div>
                        <p class="mb-4">At the core of our capability is the <strong>TOCK&reg; Controlled Rock Breaking System</strong>: an electronically activated, non-explosive rock fragmentation technology built for sites where blasting is unsafe, restricted or impossible.</p>
                        <p class="mb-4">It allows excavation next to operating plants, pipelines, refineries, utilities, marine structures and urban areas &mdash; <strong>without shutting operations down</strong>.</p>
                        
                        <h4 class="mb-3">Why TOCK?</h4>
                        <ul class="list-unstyled mb-4">
                            <li class="mb-2"><i class="fas fa-shield-alt text-primary me-2"></i> <strong>Non-explosive</strong> &mdash; no explosive content or characteristics</li>
                            <li class="mb-2"><i class="fas fa-shield-alt text-primary me-2"></i> <strong>No shock waves, no fly rock</strong> &mdash; safe within live and populated sites</li>
                            <li class="mb-2"><i class="fas fa-shield-alt text-primary me-2"></i> <strong>Ultra-low vibration</strong> &mdash; protects adjacent structures, pipelines and sensitive equipment</li>
                            <li class="mb-2"><i class="fas fa-shield-alt text-primary me-2"></i> <strong>Operational continuity</strong> &mdash; excavate without unnecessary shutdowns</li>
                            <li class="mb-2"><i class="fas fa-shield-alt text-primary me-2"></i> <strong>Environmentally responsible</strong> &mdash; minimal noise, vibration and disturbance</li>
                            <li class="mb-2"><i class="fas fa-shield-alt text-primary me-2"></i> <strong>Simple logistics</strong> &mdash; classified as liberated goods for straightforward transport and storage</li>
                            <li class="mb-0"><i class="fas fa-shield-alt text-primary me-2"></i> <strong>Internationally validated</strong> &mdash; tested to recognised safety standards, including UN transport classifications</li>
                        </ul>
                    </div>
                    <div class="col-lg-5 wow fadeInRight" data-wow-delay="0.4s">
                        <img src="img/working/EARTHWORKS.jpeg" class="img-fluid rounded" alt="TOCK System" style="width: 100%; object-fit: contain;" loading="lazy" decoding="async">
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="p-5 h-100 rounded" style="background: rgba(10, 42, 74, 0.05); border-left: 4px solid var(--bs-primary);">
                            <h3 class="mb-4">Where we work</h3>
                            <p class="mb-0 text-secondary" style="line-height: 1.8;">Oil and gas, petrochemical and refining, cross-country pipelines, power generation, industrial plants, infrastructure, marine and underwater works, tunnelling and underground utilities, airports, urban development, mining support, and environmentally sensitive sites.</p>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="p-5 h-100 rounded" style="background: rgba(208, 117, 23, 0.05); border-left: 4px solid #D07517;">
                            <h3 class="mb-4">Beyond excavation</h3>
                            <p class="mb-0 text-secondary" style="line-height: 1.8;">We combine engineering planning, risk assessment and advanced execution methods to reduce project risk, protect schedules and control costs giving clients confidence to take on complex excavation safely and without compromise.</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-5 wow fadeInUp" data-wow-delay="0.6s">
                    <a class="btn btn-primary rounded-pill py-3 px-5" href="constructionandengineering.html">Go Back To Construction and Engineering</a>
                </div>
            </div>
        </div>
</main>`;

fs.writeFileSync('earthwork.html', header + mainContent + footer, 'utf8');
console.log('earthwork.html has been perfectly rewritten!');
