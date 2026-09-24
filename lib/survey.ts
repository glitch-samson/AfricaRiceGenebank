export type SurveyQuestion = {
    id: string;
    number: string;
    label: string;
    type?: 'text' | 'email' | 'textarea' | 'select' | 'multi' | 'matrix' | 'rank';
    options?: string[];
    conditional?: string;
    required?: boolean;
};

export type SurveySection = { title: string; questions: SurveyQuestion[] };

const yesNo = ['Yes', 'No'];
const yesNoUnknown = ['Yes', 'No', "Don't know"];
const rating = ['1', '2', '3', '4', '5'];

export const surveySections: SurveySection[] = [
    {
        title: 'About You and Your Institution',
        questions: [
            { id: 'q1_name', number: 'Q1', label: 'Full name (optional)', type: 'text' },
            { id: 'q2_email', number: 'Q2', label: 'Email address', type: 'email' },
            { id: 'q3_institution', number: 'Q3', label: 'Institution / Organization', type: 'text' },
            { id: 'q4_position', number: 'Q4', label: 'Job title / Position', type: 'text' },
            { id: 'q5_country', number: 'Q5', label: 'Country', type: 'text' },
            { id: 'q6_experience', number: 'Q6', label: 'Years of experience in genetic resources or molecular biology?', type: 'select', options: ['Less than 2 years', '2-5 years', '6-10 years', 'More than 10 years'] },
            { id: 'q7_degree', number: 'Q7', label: 'Highest degree obtained?', type: 'select', options: ["Bachelor's", "Master's", 'PhD', 'Other (specify)'] },
            { id: 'q8_expertise', number: 'Q8', label: 'Primary area of expertise / professional role', type: 'multi', options: ['Breeder', 'Geneticist', 'Molecular biologist', 'Bioinformatician', 'Genebank curator / manager', 'Other (specify)'] },
            { id: 'q9_crops', number: 'Q9', label: 'Primary crops or species your genebank holds', type: 'multi', options: ['Rice', 'Maize', 'Sorghum', 'Pearl millet', 'Cowpea', 'Groundnut', 'Yam', 'Cassava', 'Soybean', 'Plantain / banana', 'Fonio', 'Forage', 'Forest species', 'Other (list up to three)'] },
        ],
    },
    {
        title: 'Sequencing Knowledge and Experience',
        questions: [
            { id: 'q10a_involved', number: 'Q10a', label: 'Has your genebank ever been involved in generating DNA/RNA sequence data from plant genetic resources?', type: 'select', options: yesNoUnknown },
            { id: 'q10a_purpose', number: 'Q10a follow-up', label: 'If yes, briefly describe the purpose.', type: 'textarea', conditional: 'Q10a is Yes' },
            { id: 'q10b_involvement', number: 'Q10b', label: 'If YES, what was your level of involvement?', type: 'multi', options: ['Only provided plant material for sequencing', 'Participated in collaborative sequencing projects (external sequencing)', 'Conducted sequencing in partnership with another institution', "Performed sequencing in-house (genebank or organisation's laboratory)", 'Performed data analysis of sequencing outputs', 'Other (specify)'], conditional: 'Q10a is Yes' },
            { id: 'q11_objectives', number: 'Q11', label: 'What are the primary objectives for which your genebank would generate and use Digital Sequence Information (DSI) in its genetic resource management?', type: 'textarea' },
            { id: 'q12_technologies', number: 'Q12', label: 'Rate your familiarity with the following sequencing technologies (1 = never heard of it; 5 = expert user). Enter one rating per technology.', type: 'matrix', options: ['Sanger sequencing', 'Illumina (short-read NGS)', 'Oxford Nanopore (long-read)', 'PacBio SMRT', 'Genotyping-by-sequencing (GBS) / DArTseq', 'SNP arrays', 'Reduced representation sequencing (RADseq, etc.)'] },
            { id: 'q13_library_methods', number: 'Q13', label: 'Which library preparation methods have you used personally?', type: 'multi', options: ['Illumina TruSeq DNA', 'Nextera XT / Flex', 'Oxford Nanopore Ligation Sequencing Kit', 'PacBio SMRTbell', 'DArTseq proprietary protocol', 'Reduced-representation bisulfite sequencing (RRBS)', 'None', 'Other (specify)'] },
            { id: 'q14_wgs', number: 'Q14', label: 'Have you ever performed a whole genome sequencing (WGS) experiment?', type: 'select', options: ['Yes, for a plant genome', 'Yes, for other organisms', 'No'] },
            { id: 'q14_species', number: 'Q14 follow-up', label: 'Species (if plant genome).', type: 'text', conditional: 'Q14 is Yes, for a plant genome' },
            { id: 'q15_samples', number: 'Q15', label: 'What is the largest number of samples you have processed in a single sequencing run?', type: 'select', options: ['0 (never processed)', '1-23', '24-95', '96-383', '384 or more'] },
            { id: 'q16_quality', number: 'Q16', label: 'Do you routinely assess DNA / RNA quality before sequencing?', type: 'multi', options: ['Gel electrophoresis', 'Spectrophotometer (e.g., NanoDrop)', 'Fluorometric quantification (Qubit, PicoGreen)', 'Bioanalyzer / TapeStation', 'No quality assessment'] },
            { id: 'q17a_applications', number: 'Q17a', label: 'Which applications has your genebank used sequencing for?', type: 'multi', options: ['Genetic diversity analysis', 'Detection of duplicates / redundant accessions in genebank collections', 'Population structure analysis for curation decisions', 'Core collection development', 'Phylogenetic / taxonomic clarification or identification', 'Gap analysis (genetic or geographic coverage)', 'Conservation prioritization', 'None of the above'] },
            { id: 'q17b_advanced', number: 'Q17b', label: 'Has your genebank used sequencing data for advanced genomic applications?', type: 'multi', options: ['Genome assembly (de novo or reference-guided)', 'Transcriptomics (RNA-Seq)', 'Epigenetics (e.g., bisulfite sequencing)', 'Metagenomics / microbiome analysis', 'Trait mapping / marker-assisted selection (if applicable)', 'None of the above'] },
            { id: 'q18_confidence', number: 'Q18', label: 'Rate your confidence in interpreting sequencing output (1 = not confident at all; 5 = very confident). Enter one rating per output type.', type: 'matrix', options: ['Quality metrics (FastQC / MultiQC reports)', 'Read alignment statistics (mapping rate, coverage)', 'Variant call files (VCF format)', 'Phylogenetic trees / dendrograms', 'Population structure plots (PCA, ADMIXTURE)'] },
            { id: 'q19a_training', number: 'Q19a', label: 'Have you ever received formal training in bioinformatics for NGS data analysis?', type: 'multi', options: ['Yes, university degree or formal academic coursework', 'Yes, structured professional workshop / training (e.g., EMBL-EBI, Galaxy)', 'Yes, short course or online certification (Coursera, other self-paced training)', 'Yes, institutional on-the-job training (within genebank or project-based mentoring)', 'No training received'] },
            { id: 'q19b_application', number: 'Q19b', label: 'Level of practical application after training.', type: 'select', options: ['Applied occasionally', 'Applied in routine analyses', 'Applied and independently used for data analysis pipelines', 'Not applied in practice'] },
            { id: 'q20_ploidy_knowledge', number: 'Q20', label: 'For the crops your genebank holds, do you know their ploidy levels?', type: 'select', options: ['Yes, for all crops', 'Yes, for some crops', 'No'] },
            { id: 'q20_crops', number: 'Q20 follow-up', label: 'Specify which crops.', type: 'text', conditional: 'Q20 is Yes, for some crops' },
            { id: 'q21_ploidy_methods', number: 'Q21', label: 'Which methods has your genebank used to determine ploidy?', type: 'multi', options: ['Flow cytometry', 'Chromosome counting (root tip squash)', 'Inference from sequencing coverage (k-mer analysis)', 'Inference from genetic markers (e.g., SSR peak number)', 'Not used any method', 'Other (specify)'] },
            { id: 'q22_protocols', number: 'Q22', label: 'Does your genebank follow standardised protocols for collecting passport data and metadata associated with genetic resources?', type: 'select', options: ['Yes, standardised and complete', 'Yes, but incomplete or inconsistently applied', 'Yes, but not aligned with international standards', 'No standard protocols', 'Not sure'] },
            { id: 'q23_metadata', number: 'Q23', label: 'What types of metadata does your genebank routinely collect and attach to sequencing projects?', type: 'multi', options: ['Passport data', 'Accession history (regeneration, storage, viability tests, distribution)', 'Phenotypic / field trial data', 'Environmental data (GPS, climate)', 'Collection mission records (field notes, photos, expedition details)', 'Legal / administrative metadata (SMTA / MTAs / PIC)', 'No metadata collected'] },
            { id: 'q24a_samples', number: 'Q24a', label: 'Which sample types does your genebank typically prepare for sequencing?', type: 'multi', options: ['Fresh leaf tissue', 'Silica-dried tissues', 'Lyophilised material', 'Seeds', 'Other (specify)'] },
            { id: 'q24b_material', number: 'Q24b', label: 'What molecular material does your genebank use for sequencing?', type: 'select', options: ['DNA', 'RNA', 'Both DNA and RNA', 'Not applicable'] },
            { id: 'q25_sops', number: 'Q25', label: 'Does your genebank follow standardised SOPs for DNA / RNA extraction?', type: 'select', options: ['Yes, internationally recognised protocols', 'Yes, internal SOPs', 'SOPs are under development', 'No formal SOPs'] },
        ],
    },
    {
        title: 'Infrastructure and Resources',
        questions: [
            { id: 'q26_equipment', number: 'Q26', label: 'Rate equipment availability for routine use (1 = not available; 5 = routinely used). Enter one rating per item.', type: 'matrix', options: ['PCR thermocycler', 'Real-time PCR (qPCR) machine', 'DNA sequencer (any type)', 'Nanopore MinION / Flongle', 'Gel electrophoresis system', 'NanoDrop / spectrophotometer', 'Qubit / fluorometer', 'Bioanalyzer / TapeStation', 'Flow cytometer (for ploidy estimation)'] },
            { id: 'q27_facility', number: 'Q27', label: 'Does your genebank have access to a centralised sequencing facility?', type: 'select', options: ['Yes, on-site', 'Yes, off-site (within country)', 'Yes, regional (shared across borders)', 'No access'] },
            { id: 'q28_turnaround', number: 'Q28', label: 'What is the typical turnaround time to receive sequencing data after sending samples?', type: 'select', options: ['Less than 2 weeks', '2-4 weeks', '1-3 months', 'More than 3 months', 'Not applicable (we do not send samples)'] },
            { id: 'q29a_computing', number: 'Q29a', label: 'Does your genebank have computing infrastructure to analyse raw sequencing data?', type: 'select', options: ['Yes, local workstation', 'Yes, institutional server / cluster', 'Yes, cloud computing (AWS, Google Cloud, etc.)', 'No, we rely on external collaborators'] },
            { id: 'q29b_sufficiency', number: 'Q29b', label: 'If yes, are these facilities sufficient and functional?', type: 'select', options: ['Yes, fully sufficient for routine analysis', 'Partially sufficient (can handle small datasets only)', 'Available but not functional (hardware / software limitations)', 'Available but lack bioinformatics software / licenses'], conditional: 'Q29a is not external collaborators' },
            { id: 'q30_tools', number: 'Q30', label: 'Which bioinformatics tools has your genebank installed or used locally?', type: 'multi', options: ['FastQC', 'Trimmomatic', 'BWA', 'Bowtie2', 'SAMtools', 'GATK', 'BCFtools', 'PLINK', 'TASSEL', 'R / Bioconductor', 'Python (Biopython)', 'Galaxy platform', 'Other (specify)'] },
            { id: 'q31_storage', number: 'Q31', label: 'Is your genebank able to store large sequencing datasets (>=1 TB) reliably?', type: 'select', options: ['Yes, with regular backups', 'Yes, but limited capacity', 'No, we lack storage infrastructure'] },
            { id: 'q32_support', number: 'Q32', label: 'Does your genebank have a dedicated person or team responsible for bioinformatics support?', type: 'select', options: ['Yes, full-time', 'Yes, part-time / shared', 'No, we rely on external collaborators', 'No support available'] },
            { id: 'q33_strategy', number: 'Q33', label: 'Does your genebank have a long-term vision / strategy for molecular characterisation?', type: 'select', options: ['Yes, documented strategy', 'Informal plan', 'No strategic direction', 'Under development', 'Aligned with organisational policy'] },
            { id: 'q34_constraint', number: 'Q34', label: "What is the most significant constraint affecting your genebank's sequencing work?", type: 'select', options: ['Absence of molecular lab', 'High cost of molecular laboratory set-up', 'High cost of sequencing runs', 'Limited funding for bioinformatics staff', 'Limited computing / storage investment', 'Limited staff with molecular analysis expertise'] },
            { id: 'q35_budget', number: 'Q35', label: 'What annual budget (approximate) does your genebank allocate for molecular characterisation?', type: 'select', options: ['$0-$5,000', '$5,000-$20,000', '$20,000-$50,000', 'Greater than $50,000', 'Not allocated / No dedicated budget', 'Not sure'] },
            { id: 'q36a_collaborate', number: 'Q36a', label: 'Does your genebank collaborate with external organisations for molecular characterisation of plant genetic resources (PGRs)?', type: 'select', options: yesNoUnknown },
            { id: 'q36b_partner', number: 'Q36b', label: 'Name of partner organisation(s).', type: 'text', conditional: 'Q36a is Yes' },
            { id: 'q36b_region', number: 'Q36b', label: 'Country / region of partner.', type: 'text', conditional: 'Q36a is Yes' },
            { id: 'q36c_broader', number: 'Q36c', label: 'Is the molecular characterisation part of a broader research collaboration or project?', type: 'select', options: yesNoUnknown, conditional: 'Q36a is Yes' },
            { id: 'q36c_description', number: 'Q36c', label: 'If yes, briefly describe the broader collaboration.', type: 'textarea', conditional: 'Q36c is Yes' },
            { id: 'q36d_roles', number: 'Q36d', label: 'What did your genebank receive as part of that partnership to generate DSI?', type: 'multi', options: ['Training', 'Equipment', 'Financial support', 'Knowledge products', 'Co-authorship in publications or other knowledge products', 'Access to genetic resources from outside your organisation', 'Access to DSI generated from outside your organisation', 'Not applicable / none of the above', 'Other (specify)'], conditional: 'Q36a is Yes' },
            { id: 'q36e_frequency', number: 'Q36e', label: 'Frequency of collaboration.', type: 'select', options: ['Continuous / ongoing', 'Annual', 'Occasional (project-based)', 'One-off', 'Not sure'], conditional: 'Q36a is Yes' },
            { id: 'q36e_monitoring', number: 'Q36e', label: 'How are activities and results monitored or coordinated?', type: 'textarea', conditional: 'Q36a is Yes' },
        ],
    },
    {
        title: 'Data Management and Sharing',
        questions: [
            { id: 'q37_repositories', number: 'Q37', label: 'Which public repositories has your genebank submitted sequence data to?', type: 'multi', options: ['NCBI (SRA / GenBank)', 'EMBL-EBI (ENA)', 'DDBJ', 'Dryad', 'Figshare', 'Indian Biological Data Center', 'Zenodo', 'CNSA (China National GeneBank Sequence Archive)', 'Dataverse', 'None', 'Other (specify)'] },
            { id: 'q38_needs', number: 'Q38', label: 'Rank your three most pressing needs: enter rank 1, 2, or 3 beside each selected need.', type: 'rank', options: ['Access to sequencing equipment or facilities', 'Funding for sequencing runs and related laboratory costs', 'Bioinformatics capacity development (training and staffing)', 'Standardised protocols and SOPs', 'Access to reference genomes and genomic databases', 'Data storage, computing infrastructure and cloud services', 'Policy guidance on DSI and benefit-sharing', 'Legal support for data sharing (MTA / SMTA)', 'Other'] },
        ],
    },
    {
        title: 'Genetic Resources and DSI Policies, Laws and Experiences',
        questions: [
            { id: 'q39_knowledge', number: 'Q39', label: "Rate your genebank's knowledge of benefit-sharing frameworks (1 = no familiarity; 5 = expert knowledge). Enter one rating per framework.", type: 'matrix', options: ['ITPGRFA multilateral system (benefit-sharing for Annex 1 crops)', 'CBD Nagoya Protocol (access and benefit-sharing)', 'CBD Decision 15/9 (DSI benefit-sharing framework)', 'CBD Decision 16/2 (multilateral mechanism for DSI)', 'SMTA / Standard Material Transfer Agreement'] },
            { id: 'q40_legal_unit', number: 'Q40', label: 'Does your genebank, or its host organisation, have a dedicated legal or policy unit?', type: 'select', options: yesNo },
            { id: 'q41_law', number: 'Q41', label: 'Are you aware of national laws or regulations addressing the access, use, or sharing of DSI?', type: 'select', options: ['Yes, existing law / regulation', 'Yes, draft or under development', 'No', "Don't know"] },
            { id: 'q41_description', number: 'Q41 follow-up', label: 'If yes, briefly name and describe the law and its relevance to DSI.', type: 'textarea', conditional: 'Q41 is existing law / regulation' },
            { id: 'q42_policy', number: 'Q42', label: 'Does your genebank have a policy or guidelines related to DSI?', type: 'select', options: ['Yes', 'No', 'Under development', "Don't know"] },
            { id: 'q42_description', number: 'Q42 follow-up', label: 'If yes or under development, provide a brief description.', type: 'textarea', conditional: 'Q42 is Yes or Under development' },
            { id: 'q43_uncertainty', number: 'Q43', label: 'Does your genebank experience uncertainty about how laws and policies affect the use of DSI?', type: 'select', options: ['Yes, considerable uncertainty', 'Yes, some uncertainty', 'No, policies are clear', "Don't know"] },
            { id: 'q43_description', number: 'Q43 follow-up', label: 'If yes, describe the main areas of uncertainty.', type: 'textarea', conditional: 'Q43 is considerable uncertainty' },
            { id: 'q44_partnership', number: 'Q44', label: 'Has your genebank generated DSI as part of a research partnership with other organisations?', type: 'select', options: yesNo },
            { id: 'q44_origin', number: 'Q44 follow-up', label: 'Were the partnering organisations from your country, another country or countries, or both?', type: 'select', options: ['My country', 'Another country or countries', 'Both'], conditional: 'Q44 is Yes' },
            { id: 'q45_benefits', number: 'Q45', label: 'What benefits did your genebank receive from the partnership?', type: 'multi', options: ['Training', 'Equipment', 'Financial support', 'Knowledge products', 'Co-authorship in publications or other knowledge products', 'Access to genetic resources from outside your organisation', 'Access to DSI generated from outside your organisation', 'Not applicable / none of the above', 'Other (specify)'], conditional: 'Q44 is Yes' },
            { id: 'q46_support', number: 'Q46', label: 'Which options would most help address policy-related uncertainties? Select up to three.', type: 'multi', options: ['Short course on DSI and the evolving policy landscape', "Model MTAs (including the ITPGRFA's SMTA) and legal templates for sequencing projects", 'Workshop on policies related to the management of DSI', 'Guidance on benefit-sharing arrangements for DSI (monetary and non-monetary)', 'Database management in compliance with international norms', 'Other (specify)'] },
        ],
    },
    {
        title: 'Interest in Future Collaborative DSI Generation for Genebank Use',
        questions: [
            { id: 'q47_interest', number: 'Q47', label: 'Would your genebank be interested in developing a proposal with CGIAR centres to generate DSI?', type: 'select', options: ['Very interested', 'Somewhat interested', 'Neutral / undecided', 'Not interested'] },
            { id: 'q47_comment', number: 'Q47 follow-up', label: 'Comment (if applicable).', type: 'textarea', conditional: 'Q47 is Not interested' },
            { id: 'q48_dsi_type', number: 'Q48', label: 'If interested, what type of DSI generation would be most relevant?', type: 'multi', options: ['Whole genome sequencing of genebank accessions', 'Genotyping-by-sequencing or similar reduced-representation sequencing for diversity panels', 'Targeted sequencing of specific genes / traits', 'Transcriptomics for stress responses', 'Other (specify)'], conditional: 'Q47 is not Not interested' },
            { id: 'q49_agreements', number: 'Q49', label: 'What type of agreements would your genebank require?', type: 'multi', options: ['Material Transfer Agreement (MTA) for samples', 'Data-Sharing Agreement explicitly covering DSI', 'Collaboration Agreement (e.g., joint research, publication rights)', 'Benefit-sharing arrangement (monetary or non-monetary)', 'No special agreement beyond existing policies', 'Other (specify)'] },
            { id: 'q50_support', number: 'Q50', label: 'Rank your top three types of support from CGIAR: enter rank 1, 2, or 3.', type: 'rank', options: ['Technical training (bioinformatics / sequencing)', 'Equipment or infrastructure grants', 'Legal / MTA template support', 'Co-funding for sequencing runs', 'Access to reference databases and pipelines', 'Policy guidance on DSI benefit-sharing', 'Other'] },
            { id: 'q51_collaboration', number: 'Q51', label: 'What type of long-term collaboration would your genebank prefer with CGIAR?', type: 'multi', options: ['Co-development of molecular analysis pipelines', 'Joint training programmes (short courses, workshops)', 'Shared infrastructure / regional hubs', 'Capacity development or internships', 'Joint research projects and publications', 'Shared data management systems (bioinformatics platforms, genomic databases)', 'Policy and standards development (ABS, DSI, data governance)'] },
            { id: 'q52_improvements', number: 'Q52', label: 'What major improvements have occurred at your genebank due to molecular characterisation?', type: 'textarea' },
            { id: 'q53_policy_issues', number: 'Q53', label: 'What policy issues would you want to address in the context of a joint DSI initiative with CGIAR?', type: 'textarea' },
            { id: 'q54_comments', number: 'Q54', label: 'Any additional comments or suggestions regarding molecular characterisation capacity at your genebank?', type: 'textarea' },
        ],
    },
];

export const allSurveyQuestions = surveySections.flatMap((section) => section.questions);