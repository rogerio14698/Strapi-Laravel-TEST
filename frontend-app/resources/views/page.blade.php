<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $page['title'] ?? 'Tienda Online' }}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f4f9; }
        .block { background: #fff; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .price { font-weight: bold; color: #2b8a3e; font-size: 1.2em; }
    </style>
</head>
<body>

    <h1>{{ $page['title'] ?? 'Tienda Online' }}</h1>
    @if(!empty($page['slug']))
        <p>{{ $page['slug'] }}</p>
    @endif

    @if(isset($page['content']))
        @foreach($page['content'] as $block)
            <div class="block">
                @switch($block['__component'])

                    @case('sections.products') {{-- Reemplaza con el nombre exacto de tu componente --}}
                        <h2>{{ $block['title'] ?? '' }}</h2>
                        <p>{{ $block['description'] ?? '' }}</p>
                        @if(isset($block['price']))
                            <p class="price">Precio: {{ $block['price'] }}€</p>
                        @endif
                        @if(isset($block['cuantity']))
                            <p>Cantidad disponible: {{ $block['cuantity'] }}</p>
                        @endif
                        @break

                    @default
                        {{-- Vista previa rápida de cualquier componente --}}
                        <pre>{{ print_r($block, true) }}</pre>

                @endswitch
            </div>
        @endforeach
    @endif

</body>
</html>