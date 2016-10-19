IGNORE = prefixes.ttl NIF-example.ttl
TTL    = $(filter-out $(IGNORE), $(wildcard *.ttl))
PUML   = $(patsubst %.ttl, %.puml, $(TTL))
PNG    = $(patsubst %.ttl, %.png, $(TTL))

all : $(PUML) $(PNG)

%.puml : %.ttl
	perl -w -S rdfpuml.pl $<

%.png : %.puml
	puml.bat $<
