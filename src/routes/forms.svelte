<script>
    import Dump from '../components/Dump.svelte';
    let form = {
        select_multiple: [],
        checkboxes: [],
    };
</script>

<h1>Forms</h1>
<p>A few examples of ways you can apply data binding to form fields</p>
<form>
    <div>
        <label>
            <span>Input Text</span><br />
            <input type="text" bind:value={form.input_text} />
        </label>
    </div>
    <div>
        <label>
            <span>Input Number</span><br />
            <input type="number" bind:value={form.input_number} />
        </label>
    </div>
    <div>
        <label>
            <span>Input Range</span><br />
            <input type="range" bind:value={form.input_range} />
        </label>
    </div>
    <div>
        <label>
            <span>Select One</span><br />
            <select bind:value={form.select_one}>
                <option value={undefined} disabled selected>Select an Option</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
            </select>
        </label>
    </div>
    <div>
        <label>
            <span>Select Multiple</span><br />
            <select multiple bind:value={form.select_multiple}>
                <option>Rice</option>
                <option>Beans</option>
                <option>Cheese</option>
                <option>Guac (extra)</option>
            </select>
        </label>
    </div>
    <div>
        <label>
            <span>Textarea</span><br />
            <textarea bind:value={form.textarea}></textarea>
        </label>
    </div>
    <div>
        <label>Yes <input type="radio" bind:group={form.radio} value="Yes"></label>
        <label>No <input type="radio" bind:group={form.radio} value="No"></label>
    </div>
    <div>
        <label>One <input type="checkbox" bind:group={form.checkboxes} value="One"></label>
        <label>Two <input type="checkbox" bind:group={form.checkboxes} value="Two"></label>
        <label>Three <input type="checkbox" bind:group={form.checkboxes} value="Three"></label>
    </div>
</form>

<Dump data={form} />
