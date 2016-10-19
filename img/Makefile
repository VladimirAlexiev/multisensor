IGNORE = MS-NER.ttl MS-sentiment.ttl MS-sentiment-NE.ttl MS-text-characteristics.ttl NIF-example.ttl NIF-issue-1.ttl NIF-issue-2.ttl NIF-test1.ttl NIF-test1-annotated.ttl NIF-test2.ttl NIF-test2-annotated.ttl ontology.ttl prefixes.ttl
TTL    = $(filter-out $(IGNORE), $(wildcard *.ttl))
PUML   = $(patsubst %.ttl, %.puml, $(TTL))
PNG    = $(patsubst %.ttl, %.png, $(TTL))
JSONLD = multisensor.jsonld NIF-example.jsonld

all : $(PUML) $(PNG) $(JSONLD)

%.puml : %.ttl
	perl -w -S rdfpuml.pl $<

%.png : %.puml
	puml.bat $<

multisensor.jsonld : prefixes.ttl
	riot --formatted=jsonld prefixes.ttl >$@

%.jsonld : %.ttl
	cat prefixes.ttl $< | riot --syntax=ttl --formatted=jsonld >$@
