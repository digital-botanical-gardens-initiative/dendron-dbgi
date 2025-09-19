
# Relevant parts of email conversations on nanopubs

## Involved persons

- ACS : Ana Claudia Sima
- DA : Donat Agosti
- LP : Lyubomir Penev
- PMA : Pierre-Marie Allard
- TK : Tobias Kühn


[nanopub_template_query_dbgi](https://dbgikg.commons-lab.org/sparql?name=dbgi_np_template&infer=true&sameAs=true&query=PREFIX%20enpkg%3A%20%3Chttps%3A%2F%2Fenpkg.commons-lab.org%2Fkg%2F%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0A%0ACONSTRUCT%20%7B%20%09%09%0A%20%20%20%20%0A%09%3Fextract%20enpkg%3Ahas_lab_process%20%3Fdbgi_sample%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Asubmitted_taxon%20%3Fsubmitted_taxon%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_wd_id%20%3Fwdid%20.%0A%20%20%20%20%3Fdbgi_sample%20rdfs%3Alabel%20%22Sample%20DBGI_01_04_001%22%20.%0A%20%20%20%20%3Fdbgi_sample%20enpkg%3Ahas_LCMS%20%3FLCMS_analysis%20.%0A%20%20%20%20%3FLCMS_analysis%20enpkg%3Ahas_lcms_feature_list%20%3FLCMSFeatureList%20.%20%0A%20%20%20%20%3FLCMSFeatureList%20enpkg%3Ahas_lcms_feature%20%3FLCMSFeature%20.%0A%20%20%20%20%3FLCMSFeature%20rdfs%3Alabel%20%22lcms_feature%20mzspec%3AMSV000090090%3ADBGI_01_04_001_features_ms2_pos.mgf%3Ascan%3A1%22%20.%0A%20%20%20%20%3FLCMSFeature%20enpkg%3Ahas_sirius_annotation%20%3FSiriusStructureAnnotation%20.%0A%20%20%20%20%3FSiriusStructureAnnotation%20enpkg%3Ahas_InChIkey2D%20%3FIK2D%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_sirius_score%20%3FSiriusScore%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_sirius_adduct%20%3FSiriusAdduct%20.%0A%20%20%20%20%3FIK2D%20enpkg%3Ais_InChIkey2D_of%20%3FIK3D%20%3B%0A%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_npc_pathway%20%3FNPCPathway%20.%0A%20%20%20%20%3FIK3D%20enpkg%3Ahas_wd_id%20%3FIK3D_wd%20.%0A%20%0A%0A%7D%20WHERE%20%7B%0A%20%20%20%20%0A%09%3Fextract%20enpkg%3Ahas_lab_process%20%3Fdbgi_sample%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Asubmitted_taxon%20%3Fsubmitted_taxon%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_wd_id%20%3Fwdid%20.%0A%20%20%20%20%3Fdbgi_sample%20rdfs%3Alabel%20%22Sample%20DBGI_01_04_001%22%20.%0A%20%20%20%20%3Fdbgi_sample%20enpkg%3Ahas_LCMS%20%3FLCMS_analysis%20.%0A%20%20%20%20%3FLCMS_analysis%20enpkg%3Ahas_lcms_feature_list%20%3FLCMSFeatureList%20.%20%0A%20%20%20%20%3FLCMSFeatureList%20enpkg%3Ahas_lcms_feature%20%3FLCMSFeature%20.%0A%20%20%20%20%3FLCMSFeature%20rdfs%3Alabel%20%22lcms_feature%20mzspec%3AMSV000090090%3ADBGI_01_04_001_features_ms2_pos.mgf%3Ascan%3A1%22%20.%0A%20%20%20%20%3FLCMSFeature%20enpkg%3Ahas_sirius_annotation%20%3FSiriusStructureAnnotation%20.%0A%20%20%20%20%3FSiriusStructureAnnotation%20enpkg%3Ahas_InChIkey2D%20%3FIK2D%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_sirius_score%20%3FSiriusScore%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_sirius_adduct%20%3FSiriusAdduct%20.%0A%20%20%20%20%3FIK2D%20enpkg%3Ais_InChIkey2D_of%20%3FIK3D%20%3B%0A%20%20%20%20%20%20%20%20%20%20enpkg%3Ahas_npc_pathway%20%3FNPCPathway%20.%0A%20%20%20%20%3FIK3D%20enpkg%3Ahas_wd_id%20%3FIK3D_wd%20.%0A%20%0A%7D%0A%0A)

To make it simple we connect the two WD described molecules (https://www.wikidata.org/wiki/Q105306594 and https://www.wikidata.org/wiki/Q105306595) to the following biological source (https://www.wikidata.org/wiki/Q4669565) through mass spec experiments and their computational interpretation.

## LP
> 
> Dear Pierre-Marie,
> 
> Thank you very much for your detailed response. No need to say, that we are much interested in this particular format of nanopubs for biodiversity which we can add to the list of already developed or "in-progress" biodiversity nanopub templates.
> 
> From my point of view, to match the format, we should have the following pre-conditions about the sources to which we can link the different elements of the nanopub format. To save time for separate discussions, I CC Tobias and Daniel Mietchen with whom we collaborate in designing biodiversity nanopubs for quite some time already.
> 
> So, in your example I think we should consider (and hopefully have) the following elements:
> 
> 1. This organism - Where to take the HTTP ID for that particular specimen? - It is not possible to get it from one universal place, as such does not exist yet. The user, however, should be able to paste the HTTP ID taken from the resource where this specimen is presented digitally, e.g. iDigBio, or some EU institutions using CETAF HTTP IDs.
> 2. Belonging to Taxon X - A  dropdown list displaying taxon names taken from a specific "trusted sources" dumb of ChecklistBank from which the user can select a name  is already embedded in the workflow of the Biodiversity Data Journal at Nanodash. If the taxon is not present, then the user can put the http link to a missing name using one of the few trusted nomenclators (IPNI, ZooBank, Index Fungorum or Mycobank, and few else). NOTE: these taxon names are Taxon IDs, not really TaxonConcept IDs (not ideal, but certainly better than nothing, especially at the start of all this).
> 3. Contains (or extracted from) (relationship, can be taken from several ontologies)
> 5. Chemical compound - where to take the HTTP IDs for these from? The best would be a controlled vocabulary, but I am sure you know this landscape much better than us.
> 6. Who has published this: - ORCID of the creator, easy and already existing in Nanodash.
> 7. Where this assertion has been taken from? - ideally from an article DOI, or if this is de novo information, then perhaps using a category "unpublished data" or so.
> 8. When this has been published - timestamp, easy.
> 
## LB
> 
> In our proposal on modelling a general structure for biodiversity nanopubs, the subject (OrganismID, IdentifeidAs [TaxonNameID], AccordingTo [TaxonConceptID], LifeStageID) might be re-used in several templates, while the predicate and the object should use different ontologies, depending on the use case. Currently we develop several other templates with the intention to follow a general pattern which would make modifications to it easy and coherent, hence my questions:
> 
> Which ontology do you use for the predicate (e.g., relation between an organism and a chemical compound (or gene) extracted  from it)?
> Which controlled vocabulary of chemical compounds do you use look up the ID of the compound in question?
> Would your model fit into the general pattern as illustrated below? 
> 
> A comment would be much appreciated!
> 
> Best regards,
> Lyubomir
> 
> SUBJECT
> Identical in (most) biodiversity nanopubs:  
>  
> OrganismID:
> IdentifiedAs: TaxonNameID
> According to (Sec.): TaxonConceptID
> LifeStage: Ontology-based
> 
> PREDICATE (RELATION)
> Relation: Terms from different ontologies depending on the template, e.g. “preys on”, “occurs in”, “contains”
> 
> OBJECT
> 
> Different for the different biodiversity nanopub templates (see below under the different templates). 
> 
> PUBLICATION INFO
> 
> Identical in all biodiversity nanopubs:
> BasisOfRecord:drop-down list of terms according to dwc:BasisOfRecird (DOI, event, preserved specimen, etc., see https://dwc.tdwg.org/terms/#dwc:basisOfRecord)
> Source: DOI, or website LINK, or "unpublished data"
> Published by: ORCID ID
> Published at: TimeStamp
> 
> Template 1: Biotic interaction between organisms
> 
> The predicate is using the Relations Ontology (RO).
> 
> The object is of the same structure as the subject (see above): OrganismID, IdentifiedAs, AccordingTo, LifeStageTemplate 2: Relation between an organism and the environment 
> 
> The predicate is using the Relations Ontology (RO).
> 
> The object uses the ENVO ontology to list the terms of habitats.
> Template 3: Relation between an organism and a chemical compound  
> 
> The predicate is using the ……………….
> 
> The subject is using……..

## Follow-up (TK)

> Dear Lyubo and all,
> 
> Overall, this looks great. I have some smaller questions/comments below.
> 
> >  2. IdentifiedAs:TaxonNameID
> >  3. According to (Sec.): TaxonConceptID
> 
> What's the difference between TaxonNameID and TaxonConceptID. To me, it 
> sounds like they are the same (or only one of them is needed)?
> 
> > PUBLICATION INFO
> > 
> > Identical in all biodiversity nanopubs:
> > 
> >  6. BasisOfRecord:drop-down list of terms according to dwc:BasisOfRecird
> >     (DOI, event, preserved specimen, etc., see
> >     https://urldefense.com/v3/__https://dwc.tdwg.org/terms/*dwc:basisOfRecord__;Iw!!Dc8iu7o!z2vibAQJKJ2kIBe8pi2vl5Kl8GqCGS5ku_4JgNsVj93Z5y07vibHk-ErQ00ny2ptXlscmwVEwC4cSol-38a344XmUfGW$
> >     <https://urldefense.com/v3/__https://dwc.tdwg.org/terms/*dwc:basisOfRecord__;Iw!!Dc8iu7o!z2vibAQJKJ2kIBe8pi2vl5Kl8GqCGS5ku_4JgNsVj93Z5y07vibHk-ErQ00ny2ptXlscmwVEwC4cSol-38a344XmUfGW$>)
> > 
> >  7. Source: DOI, or website LINK, or "unpublished data"
> 
> Yes, we can easily add that! A variant of 7 is already implemented.
> 
> But these two would be in the provenance graph, and not the publication 
> info one.
> > Template 1: Biotic interaction between organisms
> 
> So you are saying we should be refering to organisms and not taxons? Or 
> do we maybe need both?
> 
> I have been interpreting these in the way that statements refering to 
> taxons are meant to be more general, for example that wolves "somewhat 
> regularly" eat rabbits, which is different form "I saw one specific 
> wolve eating one specific rabbit". Don't we need both, of if we want to 
> have just one of them, wouldn't it rather be the more general one 
> involving taxons?
> 
> You also mentioned in the other email that you suggest to remove the 
> life cycle stages for uniformity. I think I would leave them in, at 
> least for Template 1, as they look useful for certain cases and can be 
> marked as optional. But up to you.

## Follow-up (LB)

> Dear Tobias, 
> 
> Please find my comments inline below.
> 
> Best regards,
> Lyubo
> -----
> Lyubomir Penev
> ORCID: http://orcid.org/0000-0002-2186-5033
> 
> 
> On Mon, Jun 12, 2023 at 3:52 PM Tobias Kuhn <kuhntobias@gmail.com> wrote:
> Dear Lyubo and all,
> 
> Overall, this looks great. I have some smaller questions/comments below.
> 
> >  2. IdentifiedAs:TaxonNameID
> >  3. According to (Sec.): TaxonConceptID
> 
> What's the difference between TaxonNameID and TaxonConceptID. To me, it
> sounds like they are the same (or only one of them is needed)?
> Authors often use one and the same taxon name but according to different sources that define that name. This implies the name could have different meaning in the two cases. This is very confusing we all know this, but this is how the system works. The field "According to" defines the concept used for the taxon name identified in the previous field. Taxonomist understand this very well, which I can't say for (most) other biologists. Therefore I propose the following workflow to identify the taxon concept, including an instruction text for the authors:
>  
> According to (Sec.):
> 
> 
>  
> Citation of the Taxon Concept used to define the above name (entered in IdentifiedAs),
>  normally in the form of literature reference with DOI, or link to the respective treatment (TaxonConcept) at
> TreatmentBank.
> 
> 
> The list of treatments is dynamic and can be downloaded anytime from this link at TreatmentBank (see also the instructions of Guido Sautter in the comment).
> 
> 
> The system searches for the name pasted in the above field (IdentifiedAs) and yields back a list of treatments from the Treatmentbank API that relate to this name from which the user should choose.
> 
> 
> The list displays the Taxon names and the literature reference linked to each them from TreatmentBank; there can be more than one treatment per name; the user select the record from the list and the system gets the HTTP ID to that particular treatments at TreatmentBank
> 
> 
> Ideally, after a taxon name is selected in the IdentifiedAs field, the system automatically displays all available Taxon Concepts (treatments) in the AccordingTo field.
> 
> 
> In the future there will be an API built at GNUB to serve that purpose; in the meantime we used the workflow described above.
> 
> 
> What happens if no treatment (TaxonConcept) is found in the list? 
> 
> 
> 
> The user is asked to enter the literature reference (citation of authors and year, or full reference, or DOI) according to which the organism has been identified with the taxon name specified in the IdentifiedAs field.
> 
> 
> 
> The system generates an UUID for that “missing” concept
> 
> 
> 
> The UUID and the related Taxon Concept are harvested regularly by TreatmentBank which creates a “stab” for that missing treatment.
> 
> 
> 
> 
> Instruction text for the authors:
> 
> 
> “Select the Taxon Concept used to define the taxon name above. The taxon concept consists of the full names of the taxon plus the literature source, according to which the organism has been identified as belonging to a particular taxon name. If you don’t find the Taxon Concept in the list, then enter the literature reference, either as citation of authors and year, or full reference of the literature source, or article DOI.”
> 
> 
> > PUBLICATION INFO
> >
> > Identical in all biodiversity nanopubs:
> >
> >  6. BasisOfRecord:drop-down list of terms according to dwc:BasisOfRecird
> >     (DOI, event, preserved specimen, etc., see
> >     https://dwc.tdwg.org/terms/#dwc:basisOfRecord
> >     <https://dwc.tdwg.org/terms/#dwc:basisOfRecord>)
> >
> >  7. Source: DOI, or website LINK, or "unpublished data"
> 
> Yes, we can easily add that! A variant of 7 is already implemented.
> 
> But these two would be in the provenance graph, and not the publication
> info one.
> 
> Sure, you know better. Sorry for this omission.
> > Template 1: Biotic interaction between organisms
> 
> So you are saying we should be refering to organisms and not taxons? Or
> do we maybe need both?
> We need both, as this kind of observation is always based on an organism or group of organisms. We are fully aware that in many cases we can't provide an ID for the organism that we have observed, however in this case we should mint an internal UUID to keep the system coherent.
> 
> I have been interpreting these in the way that statements refering to
> taxons are meant to be more general, for example that wolves "somewhat
> regularly" eat rabbits, which is different form "I saw one specific
> wolve eating one specific rabbit". Don't we need both, of if we want to
> have just one of them, wouldn't it rather be the more general one
> involving taxons?
> 
> For the wide public yes, they will like just a more general statement. For professional purposes to which nanopubs belong, we would need both, I am afraid.  
> 
> You also mentioned in the other email that you suggest to remove the
> life cycle stages for uniformity. I think I would leave them in, at
> least for Template 1, as they look useful for certain cases and can be
> marked as optional. But up to you.
> 
> It can be left  as such, but deprecated or just made inactive in the templates it is not needed. I wouldn't take it out entirely, as it belongs to the "general pattern" of the subject which we are trying to unify now.

## TK


> I made this Nanodash template to reflect most of what your query showed 
> (ORCID login required): 
> https://nanodash.petapico.org/publish?template=http:**Apurl.org*np*RA1ekjkshpkdtjNKNnCbdHlGRfT65IkN6sttki16dzvvw
> 
> Feel free to try it out. You can select "Example" under "Publication 
> info" if you want to test it with non-serious data.
> 
> I already connected it to the Checklistbank-powered API we have set up 
> for some other biodiversity templates for the taxon IDs.
> 
> Currently it will mint many new identifiers (for extract, sample, 
> analysis, feature list, feature, and annotation). I assume many of them 
> should also be filled with existing identifiers to be looked up. This 
> also depends on the workflow of when who should introduce what kinds of 
> things, and at which point who is referring back to them.
> 
> There are also a number of modeling decisions we could discuss. E.g. 
> with triples like "A enpkg:has_wd_id B", it would modeling-wise make 
> more sense to just use B instead of A, or use a more precise relation 
> like isExtractOfTaxon. But I understand that you might have practical 
> reasons for this. I'd be happy to discuss in any case.
> 
> I hope that makes sense and is moving in the right direction from your 
> side. Curious to hear your thoughts in any case.
> 

