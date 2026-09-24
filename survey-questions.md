# Survey Question Inventory

This document lists the questions currently implemented in the codebase. It covers the three survey flows exposed by the application routes:

1. **CGIAR Genebank Molecular Characterisation Survey**: `/molecular-characterisation-survey` and `/survey`.
2. **RBCA Genebank User Survey**: `/feedback` and its page routes.
3. **AfricaRice Genebank Survey - Evaluation of Rice Genetic Resources by NARS Partners**: `/nars-evaluation`.

Question wording and answer choices are transcribed from the views and configuration. Conditional questions are marked accordingly.

## 1. CGIAR Genebank Molecular Characterisation Survey

Source: `config/survey.php` (rendered by `resources/views/survey/index.blade.php`).

### Section 1: About You and Your Institution

- **Q1.** Full name (optional).
- **Q2.** Email address.
- **Q3.** Institution / Organization.
- **Q4.** Job title / Position.
- **Q5.** Country.
- **Q6.** Years of experience in genetic resources or molecular biology? Options: Less than 2 years; 2-5 years; 6-10 years; More than 10 years.
- **Q7.** Highest degree obtained? Options: Bachelor's; Master's; PhD; Other (specify).
- **Q8.** Primary area of expertise / professional role (select all that apply). Options: Breeder; Geneticist; Molecular biologist; Bioinformatician; Genebank curator / manager; Other (specify).
- **Q9.** Primary crops or species your genebank holds (select all that apply). Options: Rice; Maize; Sorghum; Pearl millet; Cowpea; Groundnut; Yam; Cassava; Soybean; Plantain / banana; Fonio; Forage; Forest species; Other (list up to three).

### Section 2: Sequencing Knowledge and Experience

- **Q10a.** Has your genebank ever been involved in generating DNA/RNA sequence data from plant genetic resources? Options: Yes; No; Don't know.
- **Q10a follow-up.** If yes, briefly describe the purpose.
- **Q10b.** If YES, what was your level of involvement? (Select all that apply.) Options: Only provided plant material for sequencing; Participated in collaborative sequencing projects (external sequencing); Conducted sequencing in partnership with another institution; Performed sequencing in-house (genebank or organisation's laboratory); Performed data analysis of sequencing outputs; Other (specify). Shown if Q10a is Yes.
- **Q11.** What are the primary objectives for which your genebank would generate and use Digital Sequence Information (DSI) in its genetic resource management? (Select all that apply.)
- **Q12.** Rate your familiarity with the following sequencing technologies (1 = never heard of it; 2 = heard of it, no familiarity; 3 = basic understanding; 4 = practical experience; 5 = expert user): Sanger sequencing; Illumina (short-read NGS); Oxford Nanopore (long-read); PacBio SMRT; Genotyping-by-sequencing (GBS) / DArTseq; SNP arrays; Reduced representation sequencing (RADseq, etc.).
- **Q13.** Which library preparation methods have you used personally? (Select all that apply.) Options: Illumina TruSeq DNA; Nextera XT / Flex; Oxford Nanopore Ligation Sequencing Kit; PacBio SMRTbell; DArTseq proprietary protocol; Reduced-representation bisulfite sequencing (RRBS); None; Other (specify).
- **Q14.** Have you ever performed a whole genome sequencing (WGS) experiment? Options: Yes, for a plant genome; Yes, for other organisms; No.
- **Q14 follow-up.** Species (if plant genome). Shown if Q14 is “Yes, for a plant genome”.
- **Q15.** What is the largest number of samples you have processed in a single sequencing run? Options: 0 (never processed); 1-23; 24-95; 96-383; 384 or more.
- **Q16.** Do you routinely assess DNA / RNA quality before sequencing? (Select all that apply.) Options: Gel electrophoresis; Spectrophotometer (e.g., NanoDrop); Fluorometric quantification (Qubit, PicoGreen); Bioanalyzer / TapeStation; No quality assessment.
- **Q17a.** Which of the following applications has your genebank used sequencing for? (Select all that apply.) Options: Genetic diversity analysis; Detection of duplicates / redundant accessions in genebank collections; Population structure analysis for curation decisions; Core collection development; Phylogenetic / taxonomic clarification or identification; Gap analysis (genetic or geographic coverage); Conservation prioritization; None of the above.
- **Q17b.** Has your genebank used sequencing data for any of the following advanced genomic applications? (Select all that apply.) Options: Genome assembly (de novo or reference-guided); Transcriptomics (RNA-Seq); Epigenetics (e.g., bisulfite sequencing); Metagenomics / microbiome analysis; Trait mapping / marker-assisted selection (if applicable); None of the above.
- **Q18.** Rate your confidence in interpreting the following types of sequencing output (1 = not confident at all; 2 = slightly confident; 3 = moderately confident; 4 = quite confident; 5 = very confident): Quality metrics (FastQC / MultiQC reports); Read alignment statistics (mapping rate, coverage); Variant call files (VCF format); Phylogenetic trees / dendrograms; Population structure plots (PCA, ADMIXTURE).
- **Q19a.** Have you ever received formal training in bioinformatics for NGS data analysis? Options: Yes, university degree or formal academic coursework; Yes, structured professional workshop / training (e.g., EMBL-EBI, Galaxy); Yes, short course or online certification (Coursera, other self-paced training); Yes, institutional on-the-job training (within genebank or project-based mentoring); No training received.
- **Q19b.** Level of practical application after training. Options: Applied occasionally; Applied in routine analyses; Applied and independently used for data analysis pipelines; Not applied in practice.
- **Q20.** For the crops your genebank holds, do you know their ploidy levels? Options: Yes, for all crops; Yes, for some crops; No.
- **Q20 follow-up.** Specify which crops. Shown if Q20 is “Yes, for some crops”.
- **Q21.** Which methods has your genebank used to determine ploidy? (Select all that apply.) Options: Flow cytometry; Chromosome counting (root tip squash); Inference from sequencing coverage (k-mer analysis); Inference from genetic markers (e.g., SSR peak number); Not used any method; Other (specify).
- **Q22.** Does your genebank follow standardised protocols (aligned with international guidelines) for collecting passport data and metadata associated with genetic resources? Options: Yes, standardised and complete; Yes, but incomplete or inconsistently applied; Yes, but not aligned with international standards; No standard protocols; Not sure.
- **Q23.** What types of metadata does your genebank routinely collect and attach to sequencing projects? (Select all that apply.) Options: Passport data; Accession history (regeneration, storage, viability tests, distribution); Phenotypic / field trial data; Environmental data (GPS, climate); Collection mission records (field notes, photos, expedition details); Legal / administrative metadata (SMTA / MTAs / PIC); No metadata collected.
- **Q24a.** Which sample types does your genebank typically prepare for sequencing? (Select all that apply.) Options: Fresh leaf tissue; Silica-dried tissues; Lyophilised material; Seeds; Other (specify).
- **Q24b.** What molecular material does your genebank use for sequencing? Options: DNA; RNA; Both DNA and RNA; Not applicable.
- **Q25.** Does your genebank follow standardised SOPs for DNA / RNA extraction? Options: Yes, internationally recognised protocols; Yes, internal SOPs; SOPs are under development; No formal SOPs.

### Section 3: Infrastructure and Resources

- **Q26.** Does your genebank laboratory have the following equipment available for routine use? (1 = not available; 2 = available but not functional; 3 = rarely used; 4 = occasionally used; 5 = routinely used.) Equipment: PCR thermocycler; Real-time PCR (qPCR) machine; DNA sequencer (any type); Nanopore MinION / Flongle; Gel electrophoresis system; NanoDrop / spectrophotometer; Qubit / fluorometer; Bioanalyzer / TapeStation; Flow cytometer (for ploidy estimation).
- **Q27.** Does your genebank have access to a centralised sequencing facility (in-country or regional)? Options: Yes, on-site; Yes, off-site (within country); Yes, regional (shared across borders); No access.
- **Q28.** What is the typical turnaround time to receive sequencing data after sending samples? Options: Less than 2 weeks; 2-4 weeks; 1-3 months; More than 3 months; Not applicable (we do not send samples).
- **Q29a.** Does your genebank have computing infrastructure to analyse raw sequencing data (e.g., >=32 GB RAM, multi-core CPU)? Options: Yes, local workstation; Yes, institutional server / cluster; Yes, cloud computing (AWS, Google Cloud, etc.); No, we rely on external collaborators.
- **Q29b.** If yes, are these facilities sufficient and functional for analysing raw sequencing data? Options: Yes, fully sufficient for routine analysis; Partially sufficient (can handle small datasets only); Available but not functional (hardware / software limitations); Available but lack bioinformatics software / licenses. Shown when Q29a is not external collaborators.
- **Q30.** Which of the following bioinformatics tools has your genebank installed or used locally? (Select all that apply.) Options: FastQC; Trimmomatic; BWA; Bowtie2; SAMtools; GATK; BCFtools; PLINK; TASSEL; R / Bioconductor; Python (Biopython); Galaxy platform; Other (specify).
- **Q31.** Is your genebank able to store large sequencing datasets (>=1 TB) reliably? Options: Yes, with regular backups; Yes, but limited capacity; No, we lack storage infrastructure.
- **Q32.** Does your genebank have a dedicated person or team responsible for bioinformatics support? Options: Yes, full-time; Yes, part-time / shared; No, we rely on external collaborators; No support available.
- **Q33.** Does your genebank have a long-term vision / strategy for molecular characterisation? Options: Yes, documented strategy; Informal plan; No strategic direction; Under development; Aligned with organisational policy.
- **Q34.** What is the most significant constraint affecting your genebank's sequencing work? Options: Absence of molecular lab; High cost of molecular laboratory set-up; High cost of sequencing runs; Limited funding for bioinformatics staff; Limited computing / storage investment; Limited staff with molecular analysis expertise.
- **Q35.** What annual budget (approximate) does your genebank allocate for molecular characterisation? Options: $0-$5,000; $5,000-$20,000; $20,000-$50,000; Greater than $50,000; Not allocated / No dedicated budget; Not sure.
- **Q36a.** Does your genebank collaborate with external organisations for molecular characterisation of plant genetic resources (PGRs)? Options: Yes; No; Not sure.
- **Q36b.** Name of partner organisation(s). Shown if Q36a is Yes.
- **Q36b.** Country / region of partner. Shown if Q36a is Yes.
- **Q36c.** Nature of collaboration - Is the molecular characterisation part of a broader research collaboration or project? Options: Yes; No; Not sure. Shown if Q36a is Yes.
- **Q36c.** If yes, briefly describe the broader collaboration. Shown if Q36c is Yes.
- **Q36d.** Roles and contributions - Please describe what your genebank received as part of that partnership to generate DSI. Indicate if your genebank received: Training; Equipment; Financial support; Knowledge products; Co-authorship in publications or other knowledge products; Access to genetic resources from outside your organisation; Access to DSI generated from outside your organisation; Not applicable / none of the above; Other (specify). Shown if Q36a is Yes.
- **Q36e.** Frequency of collaboration. Options: Continuous / ongoing; Annual; Occasional (project-based); One-off; Not sure. Shown if Q36a is Yes.
- **Q36e.** How are activities and results monitored or coordinated? Shown if Q36a is Yes.

### Section 4: Data Management and Sharing

- **Q37.** Which public repositories has your genebank submitted sequence data to? (Select all that apply.) Options: NCBI (SRA / GenBank); EMBL-EBI (ENA); DDBJ; Dryad; Figshare; Indian Biological Data Center; Zenodo; CNSA (China National GeneBank Sequence Archive); Dataverse; None; Other (specify).
- **Q38.** What are the three most pressing needs for your genebank to enhance its use of sequencing in genetic resource management? Rank your top 3: 1 = most pressing, 2 = second most pressing, 3 = third most pressing. Needs: Access to sequencing equipment or facilities; Funding for sequencing runs and related laboratory costs; Bioinformatics capacity development (training and staffing); Standardised protocols and SOPs; Access to reference genomes and genomic databases; Data storage, computing infrastructure and cloud services; Policy guidance on DSI and benefit-sharing; Legal support for data sharing (MTA / SMTA); Other.

### Section 5: Genetic Resources and DSI Policies, Laws and Experiences

- **Q39.** Rate your genebank's knowledge of benefit-sharing frameworks related to the use of genetic resources and DSI (1 = no familiarity; 2 = heard of it, no understanding; 3 = basic understanding; 4 = good understanding; 5 = expert knowledge): ITPGRFA multilateral system (benefit-sharing for Annex 1 crops); CBD Nagoya Protocol (access and benefit-sharing); CBD Decision 15/9 (DSI benefit-sharing framework); CBD Decision 16/2 (multilateral mechanism for DSI); SMTA / Standard Material Transfer Agreement.
- **Q40.** Does your genebank, or the organisation that hosts your genebank, have a dedicated legal or policy unit that handles genetic resource intellectual property, MTAs, or benefit-sharing agreements? Options: Yes; No.
- **Q41.** Are you aware of any national laws or regulations in your country that address (or are under development to address) the access, use, or sharing of DSI? Options: Yes, existing law / regulation; Yes, draft or under development; No; Don't know.
- **Q41 follow-up.** If yes, briefly name and describe the law and its relevance to DSI. Shown for an existing law / regulation.
- **Q42.** Does your genebank have a policy or guidelines related to the generation, use, sharing, or publication of DSI from genetic resources? Options: Yes; No; Under development; Don't know.
- **Q42 follow-up.** If yes or under development, please provide a brief description. Shown if Q42 is Yes or Under development.
- **Q43.** Does your genebank experience uncertainty about how international or national laws and policies affect the use of DSI associated with its collections? Options: Yes, considerable uncertainty; Yes, some uncertainty; No, policies are clear; Don't know.
- **Q43 follow-up.** If yes, briefly describe the main areas of uncertainty. Shown for considerable uncertainty.
- **Q44.** Has your genebank generated DSI as part of a research partnership with other organisations? Options: Yes; No.
- **Q44 follow-up.** If yes, were the partnering organisations from my country, from another country or countries, or both? Shown if Q44 is Yes.
- **Q45.** If you answered yes to Q44, as part of that partnership to generate DSI, please indicate if your genebank received any of the following benefits from the partnership (select all that apply): Training; Equipment; Financial support; Knowledge products; Co-authorship in publications or other knowledge products; Access to genetic resources from outside your organisation; Access to DSI generated from outside your organisation; Not applicable / none of the above; Other (specify). Shown if Q44 is Yes.
- **Q46.** Which of the following would most help your genebank address policy-related uncertainties regarding DSI? (Select up to three.) Options: Short course on DSI and the evolving policy landscape; Model MTAs (including the ITPGRFA's SMTA) and legal templates for sequencing projects; Workshop on policies related to the management of DSI; Guidance on benefit-sharing arrangements for DSI (monetary and non-monetary); Database management in compliance with international norms; Other (specify).

### Section 6: Interest in Future Collaborative DSI Generation for Genebank Use

- **Q47.** Would your genebank be interested in developing a proposal with CGIAR centres to generate DSI from genebank accessions for use in breeding programmes? Options: Very interested; Somewhat interested; Neutral / undecided; Not interested.
- **Q47 follow-up.** Comment (if applicable). Shown if Q47 is Not interested.
- **Q48.** If interested, what type of DSI generation would be most relevant for your genebank? (Select all that apply.) Options: Whole genome sequencing of genebank accessions; Genotyping-by-sequencing or similar reduced-representation sequencing for diversity panels; Targeted sequencing of specific genes / traits; Transcriptomics for stress responses; Other (specify). Shown if Q47 is not Not interested.
- **Q49.** What type of agreements would your genebank require to participate in such collaborative DSI generation? (Select all that apply.) Options: Material Transfer Agreement (MTA) for samples; Data-Sharing Agreement explicitly covering DSI; Collaboration Agreement (e.g., joint research, publication rights); Benefit-sharing arrangement (monetary or non-monetary); No special agreement beyond existing policies; Other (specify).
- **Q50.** What support from CGIAR would most help your genebank engage in collaborative DSI generation? Rank your top 3: 1 = most important. Options: Technical training (bioinformatics / sequencing); Equipment or infrastructure grants; Legal / MTA template support; Co-funding for sequencing runs; Access to reference databases and pipelines; Policy guidance on DSI benefit-sharing; Other.
- **Q51.** What type of long-term collaboration would your genebank prefer with CGIAR? (Select all that apply.) Options: Co-development of molecular analysis pipelines; Joint training programmes (short courses, workshops); Shared infrastructure / regional hubs; Capacity development or internships; Joint research projects and publications; Shared data management systems (bioinformatics platforms, genomic databases); Policy and standards development (ABS, DSI, data governance).
- **Q52.** What major improvements have occurred at your genebank due to molecular characterisation?
- **Q53.** What policy issues would you want to address in the context of a joint DSI initiative with CGIAR?
- **Q54.** Any additional comments or suggestions regarding molecular characterisation capacity at your genebank, especially concerning potential collaborative DSI projects?

## 2. RBCA Genebank User Survey

Source: `resources/views/questionnaire/page1.blade.php`, `page2.blade.php`, `page4.blade.php`, `page5.blade.php`, and `page6.blade.php`. Entry route: `/feedback`.

The route currently goes from page 2 directly to the view served by `/page-3`, which is `page4.blade.php`; the old accession-selection page (`page3.blade.php`) is not linked because its routes are commented out.

- **Question 1.** Please enter your e-mail address.
- **Question 2.** Please enter your institution.
- **Question 3.** Which of the following groups best classifies your institution? Options: CGIAR Center; NARS; University; Individual; Famer (as written in the view).
- **Question 3a (conditional, NARS only).** Are you willing to exchange your germplasm materials with other National Agricultural Research Systems (NARS)? Options: Yes; No. If No, provide reasons.
- **Question 3b (conditional, NARS only).** Are you open to sharing these materials with CGIAR and other potential germplasm users? Options: Yes; No. If No, provide reasons.
- **Question 3c (conditional, NARS only).** Would you be willing to send these resources to CGIAR centers for backup or duplication purposes? Options: Yes; No. If No, provide reasons.
- **Question 3d (conditional, NARS only).** Are you willing to conduct evaluations of your own germplasm collections and collaborate with AfricaRice for these evaluations? Options: Yes; No. If No, provide reasons.
- **Question 4.** Have you requested for germplasm from AfricaRice Genebank at least once? The control presents No/Yes.
- **Question 5 (legacy, currently inactive).** Choose what accession(s) you have requested at least once? This appears in `page3.blade.php`, but the route and controller action that would submit it are commented out.
- **Question 5 (active numbering in the current route).** In your opinion how relevant are these traits in informing your decision to use AfricaRice germplasm? Options: Drought Resistance; Heat Resistance; Flooding Resistance; Salinity; Insect Resistance; Pests Resistance; Diseases; Yield; Quality/nutrition. Each is marked Relevant.
- **Question 6.** What are the specific results received from the germplasm materials demanded from AfricaRice genebank? Options: The germplasm is still being evaluated; Scientific publication; Characterization and evaluation data; Identification of traits; Genes/markers generated; Expanded germplasm options; Advanced breeding lines; Improved variety or new cultivar; Digital sequence information generated; Direct planting material.
- **Question 7.** In future what are the traits that would likely inform your decision to request germplasm material from AfricaRice Genebank? Options: Drought resistance; Nutrition/quality enhancing; Resistance to other diseases; Yield enhancing; Salinity tolerance; Resistance to insect pests; Heat tolerance; Tolerance to waterlogging; Resistance to other pests; Other traits (specify).
- **Question 8.** What percentage of AfricaRice accessions are utilized in your research and non-research activities? The view asks for an estimated percentage of the collection used.
- **Question 9.** Rate the quality of seeds received from AfricaRice Genebank. Options: High; Average; Poor.
- **Question 10.** Rate the quality-of-service delivery of germplasm material from AfricaRice Genebank. Options: High; Average; Poor.
- **Question 11.** Provide comments on how to improve the service delivery of AfricaRice Germplasm Distribution.

## 3. AfricaRice Genebank Survey - Evaluation of Rice Genetic Resources by NARS Partners

Source: `resources/views/questionnaire/pagesw.blade.php`. Entry route: `/nars-evaluation`.

- **Question 1.** Nom et Prénoms (Full Name).
- **Question 2.** Institution de Provenance (Affiliated Institution).
- **Question 3.** Adresse Email (Email Address).
- **Question 4.** Contact WhatsApp (Phone Number with WhatsApp Access).
- **Question 5.** Which stress traits are you most interested in screening for? Options: Drought tolerance; Salinity tolerance; Heat tolerance; Iron toxicity; Anaerobic germination; Flood tolerance; Disease resistance; Pest resistance (AfRGM); Nutrient-use efficiency; Others (please specify).
- **Question 6.** What facilities are available in your country/institution for screening rice genetic resources as per Question 5? Options: Laboratory; Field testing stations; Greenhouse; Controlled environment chambers; Others (please specify).
- **Question 7.** Do you have access to hotspot locations suitable for screening the stress traits selected in Question 5? The control presents No/Yes.
- **Question 8.** (If Yes) Please provide the location details (department, region, or village).
- **Question 9.** Are there valuable rice genetic resources in your country that are endangered and urgently need conservation and/or collection in collaboration with the AfricaRice Genebank? The control presents No/Yes.

## Source Notes

- The CGIAR survey is configuration-driven; its question IDs, conditional rules, and answer choices are defined in `config/survey.php`.
- The RBCA user survey has historical numbering and a disabled accession-selection step. This inventory preserves the labels shown in the active views and calls out the inactive legacy view.
- The NARS survey uses checkbox and toggle controls. The displayed question text is the source of truth; the controller persists the submitted values in `QuesController::saveswfeed()`.
